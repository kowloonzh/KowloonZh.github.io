import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "井久",
  description: "井久的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
