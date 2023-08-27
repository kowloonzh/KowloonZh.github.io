import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "编程",
      icon: "code",
      prefix: "coding/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "理财",
      icon: "eye",
      collapsible: true,
      prefix: "invest/",
      children: "structure",
    },
    // "intro",
    // "slides",
  ],
});
