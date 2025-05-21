import { MainNavItem, SidebarNavItem } from "../types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/button",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    // {
    //   title: "Installation",
    //   items: [
    //     {
    //       title: "Next.js",
    //       href: "/docs/installation/next",
    //       items: [],
    //     },
    //   ],
    // },
    {
      title: "Components",
      items: [
        // {
        //   title: "Accordion",
        //   href: "/docs/components/accordion",
        //   items: [],
        // },
        // {
        //   title: "Alert",
        //   href: "/docs/components/alert",
        //   items: [],
        // },
        // {
        //   title: "Alert Dialog",
        //   href: "/docs/components/alert-dialog",
        //   items: [],
        // },
        // {
        //   title: "Aspect Ratio",
        //   href: "/docs/components/aspect-ratio",
        //   items: [],
        // },
        // {
        //   title: "Avatar",
        //   href: "/docs/components/avatar",
        //   items: [],
        // },
        // {
        //   title: "Badge",
        //   href: "/docs/components/badge",
        //   items: [],
        // },
        // {
        //   title: "Breadcrumb",
        //   href: "/docs/components/breadcrumb",
        //   items: [],
        // },
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
      ],
    },
  ],
};
