// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_NAME = "Muhammad Ali";
export const SITE_TITLE = SITE_NAME;

export const SITE_URL = "https://sudoali.dev";

export const SITE_DESCRIPTION =
  "Portfolio and writing by Muhammad Ali — software projects, experiments, and occasional late-night thoughts. Chase entropy.";

/** Title pattern for inner pages: `Blog — Muhammad Ali` */
export function sitePageTitle(pageTitle: string) {
  return `${pageTitle} — ${SITE_NAME}`;
}

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
    title: "know-me.ai",
    id: "know-me",
    url: "/know-me",
    tooltip: "Talk to digital Ali",
  },
  {
    title: "resume.pdf",
    redirect: "https://drive.google.com/file/d/1a2Ivnwd5wGrSoLbTPJtswdSOdLfqAVUF/view?usp=sharing",
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
