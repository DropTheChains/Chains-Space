import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Chains-Space/",

  lang: "zh-CN",
  title: "Chains Space",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
