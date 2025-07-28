/**
 * page controller
 */

import { factories } from "@strapi/strapi"
import findPageBySlug from "../handlers/find-page-by-slug"

async function findPagesSlugs(ctx) {
  const response = await strapi.service("api::page.page").find({
    select: ["slug"],
  })
  return response
}

export default factories.createCoreController("api::page.page", ({ strapi }) => ({
  findPageBySlug,
  findPagesSlugs,
}))
