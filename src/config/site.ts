import authorAvatar from "../../public/images/author/devbertskie.png";
export const siteConfig = {
  name: "My Blog",
  description:
    "I'm a Frontend Developer from Taiwan, passionate about crafting great user experiences. As a Software Engineer, I’m excited for the journey ahead and where it will take me.",
  author: "Hung Sheng, Liu",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/hongsheng27",
    instagram: "https://www.instagram.com/hongsheng_liu/",
    linkedin: "https://www.linkedin.com/in/will-liu-700b89290/",
  },
};

export type SiteConfig = typeof siteConfig;
