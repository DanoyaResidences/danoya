// https://v3.nuxtjs.org/api/configuration/nuxt.config

require("dotenv").config();
export default defineNuxtConfig({
  buildModules: [
    // Simple usage
    "@nuxtjs/dotenv",
  ],
  swiper: {
    styleLang: "css",
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/strapi", "nuxt-swiper"],
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  head: {
    title: "Danoya Private Luxury Residences",
    meta: [],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
});
