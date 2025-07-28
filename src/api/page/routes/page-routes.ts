export default {
  routes: [
    {
      method: "GET",
      path: "/pages/slugs",
      handler: "page.findPagesSlugs",
      config: { auth: false },
    },
    {
      method: "GET",
      path: "/pages/slug/:slug",
      handler: "page.findPageBySlug",
      config: { auth: false },
    },
  ],
}
