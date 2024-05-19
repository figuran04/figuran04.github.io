import { defineConfig } from "vitepress"

const hostname = "https://figuran04.github.io"

export default defineConfig({
  title: "Dika Elsaputra",
  description: "Dokumentasi",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "./logo.svg",
      },
    ],
  ],
  themeConfig: {
    repo: "",
    editLink: false,
    smoothScrolling: true,
    docsDir: "",
    logo: "./logo.svg",
    nav: [
      { text: "Beranda", link: "/" },
      {
        text: "Semester 1",
        items: [
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
    ],

    sidebar: [
      {
        text: "Semester 1",
        items: [
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
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/figuran04" },
      { icon: "instagram", link: "https://github.com/figuran04" },
    ],
    footer: {
      message:
        'Dirilis di bawah <a href="https://github.com/figuran04">MIT License</a>.',
      copyright: `Hak cipta © ${new Date().getFullYear()} <a href="https://github.com/figuran04">Dika Elsaputra</a>`,
    },
    // EditLink
    // editLink: {
    //   pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    //   text: "Edit this page on GitHub",
    // },
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
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
})
