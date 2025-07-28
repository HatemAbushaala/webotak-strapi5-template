import { logger } from "../../../utils/dev-utils"
export default async function findPageBySlug(ctx) {
  const { slug } = ctx.params

  const { results } = await strapi.service("api::page.page").find({
    where: {
      slug,
    },
    populate: {
      blocks: {
        on: {
          "pages.cta": {
            populate: ["*"],
          },
          "pages.query": {
            populate: ["*"],
          },
          "pages.lists": {
            populate: ["items.image"],
          },
        },
      },
    },
  })
  if (results.length === 0) {
    return ctx.notFound()
  }

  const { createdAt, updatedAt, publishedAt, documentId, locale, ...page } = results[0]

  const promises = page.blocks.map(async (block) => {
    const { __component, type, ...rest } = block

    if (__component !== "pages.query") return block

    const query = {
      populate: "*",
      ...(rest.query || {}),
      pagination: {
        limit: rest.limit || 5,
      },
    }

    const contentType = `api::${type}.${type}`

    logger({ query })

    const { results } = await strapi.service(contentType).find(query)

    return { ...block, results: results.map(({ createdAt, updatedAt, publishedAt, documentId, locale, ...other }) => other) }
  })

  page.blocks = await Promise.all(promises)

  return { data: page }
}
