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
  // 百度统计
  head: [
    [
        'script', {},
        `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?52e54a294e73ad3da039f9aedf7d116d";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        `
    ]
],
});