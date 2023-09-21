export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Horizon",
  description: "Explore the Celestial capabilities of the Celestial Suite",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
  ],
  links: {
    github: "https://github.com/celestial-hub",
    docs: "https://nextui.org",
    sponsor: "https://github.com/sponsors/daniel-boll",
  },
};
