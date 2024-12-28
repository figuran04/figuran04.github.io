import { defineConfig } from "vitepress";

const hostname = "https://figuran04.github.io";

export default defineConfig({
  title: "Dika Elsaputra",
  description: "Dokumentasi",
  titleTemplate: ".doc",
  // base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "./logo.svg",
      },
    ],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "origin",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  themeConfig: {
    repo: "",
    smoothScrolling: true,
    siteTitle: "Dika Elsaputra", //string | false
    docsDir: "",
    logo: "./logo.svg",
    nav: [
      {
        text: "Beranda",
        link: "/",
        // activeMatch: "/config/"
      },
      {
        text: "Semester 1",
        items: [
          {
            text: "Algoritma Pemrograman",
            items: [{ text: "BarangKu", link: "/barangku" }],
          },
          {
            text: "Logika Matematika",
            items: [{ text: "GateFlow", link: "/gateflow" }],
          },
        ],
      },
      {
        text: "Semester 2",
        items: [
          {
            text: "Aljabar Linear",
            items: [{ text: "MatrixXpert", link: "/matrixxpert" }],
          },
        ],
      },
      {
        text: "Semester 3",
        items: [
          {
            text: "PBO",
            items: [{ text: "Taskova", link: "/taskovaa" }],
          },
        ],
      },
    ],

    sidebar: {
      "/": [
        {
          text: "Semester 1",
          collapsible: true,
          items: [
            {
              text: "Algoritma Pemrograman",
              items: [{ text: "BarangKu", link: "/barangku" }],
            },
            {
              text: "Logika Matematika",
              items: [{ text: "GateFlow", link: "/gateflow" }],
            },
          ],
        },
        {
          text: "Semester 2",
          collapsible: true,
          items: [
            {
              text: "Aljabar Linear",
              items: [{ text: "MatrixXpert", link: "/matrixxpert" }],
            },
          ],
        },
        {
          text: "Semester 3",
          collapsible: true,
          items: [
            {
              text: "PBO",
              items: [{ text: "Taskova", link: "/taskovaa" }],
            },
          ],
        },
      ],
      // "/started/": [
      //   {
      //     text: "Guide",
      //     items: [
      //       { text: "Index", link: "/guide/" },
      //       { text: "One", link: "/guide/one" },
      //       { text: "Two", link: "/guide/two" },
      //     ],
      //   },
      // ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/figuran04",
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: "github link",
        target: "_blank",
      },
      {
        icon: "instagram",
        link: "https://instagram.com/figuran_04",
        ariaLabel: "instagram link",
        target: "_blank",
      },
      {
        icon: "youtube",
        link: "https://medium.com/@dikaelsaputra",
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: "medium link",
        target: "_blank",
      },
    ],
    footer: {
      message:
        'Dirilis di bawah <a href="https://github.com/figuran04">MIT License</a>.',
      copyright: `Hak cipta © ${new Date().getFullYear()} <a href="https://github.com/figuran04">Dika Elsaputra</a>`,
    },
    // EditLink
    editLink: {
      pattern: "https://github.com/figuran04/figuran04.github.io/main",
      text: "Edit this page on GitHub",
    },
    // DocFooter
    docFooter: {
      prev: "Sebelumnya",
      next: "Berikutnya",
    },
    // Search
    search: {
      provider: "local",
    },
    // LastUpdatedOptions
    lastUpdated: {
      // text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        // timeStyle: "medium",
      },
    },
    // CarbonAdsOptions
    // carbonAds: {
    //   code: "your-carbon-code",
    //   placement: "your-carbon-placement",
    // },
    // darkModeSwitchLabel
    // Type: string
    // Default: Appearance

    // lightModeSwitchTitle
    // Type: string
    // Default: Switch to light theme

    // darkModeSwitchTitle
    // Type: string
    // Default: Switch to dark theme

    // sidebarMenuLabel
    // Type: string
    // Default: Menu

    // returnToTopLabel
    // Type: string
    // Default: Return to top

    // langMenuLabel
    // Type: string
    // Default: Change language

    // externalLinkIcon
    // Type: boolean
    // Default: false
  },
  // rcDir: "./src",
  // srcExclude: ["**/README.md", "**/TODO.md"],
  // outDir: "../public",
  // assetsDir: "static",
  // cacheDir: "./.vitepress/.vite",
  // ignoreDeadLinks: [
  //   // ignore exact url "/playground"
  //   "/playground",
  //   // ignore all localhost links
  //   /^https?:\/\/localhost/,
  //   // ignore all links include "/repl/""
  //   /\/repl\//,
  //   // custom function, ignore all links include "ignore"
  //   (url) => {
  //     return url.toLowerCase().includes("ignore")
  //   },
  // ],
});
