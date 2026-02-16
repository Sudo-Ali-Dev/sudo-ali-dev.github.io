// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Muhammad Ali";
export const SITE_DESCRIPTION = "Chase Entropy.";

export interface NavLink {
  title: string;
  id?: string;
  url?: string;
  redirect?: string;
  tooltip?: string;
}

export const NAV_LINKS: NavLink[] = [
  {
    title: "index.html",
    id: "home",
    url: "/",
    tooltip: "Home",
  },
  {
    title: "projects.json",
    id: "projects",
    url: "/archive",
    tooltip: "Things I've built",
  },
  {
    title: "resume.pdf",
    redirect: "https://google.com",
    tooltip: "A very interesting page",
  },
];

export type SocialPlatform = "twitter" | "github" | "instagram" | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/sudo-ali/",
    label: "linkedin",
  },
  {
    platform: "github",
    url: "https://github.com/Sudo-Ali-Dev",
    label: "Github",
  },
];
