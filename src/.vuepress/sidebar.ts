import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/note/": [
    {
      text: "笔记",
      prefix: "",
      children: "structure",
    },
  ],
  "/blog/": [
    {
      text: "博客",
      prefix: "",
      children: "structure",
    },
  ],
});
