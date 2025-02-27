import { sectionAbout, sectionProjects, sectionContacts } from "../sections";

export const ROUTES_MAP = {
  default: {
    href: "/portfolio",
    component: sectionAbout
  },
  about: {
    href: "/about",
    component: sectionAbout
  },
  projects: {
    href: "/projects",
    component: sectionProjects
  },
  contacts: {
    href: "/contacts",
    component: sectionContacts
  }
};
