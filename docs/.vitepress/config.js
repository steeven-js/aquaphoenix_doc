import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'fr-FR',
  title: "Aquaphoenix",
  description: "Aquaphoenix Documentation",
  themeConfig: {
    logo: './logo.png',
    // https://vitepress.dev/reference/default-theme-config
    // Navbar Link
    nav: [
      { text: "About", link: "/about" },
      { text: "Documentation", link: "/documentation" },
      { text: "Contact", link: "/contact" },
      {
        // Dropdown Menu
        text: "Changelog",
        items: [
          { text: "info", link: "/changelog/" },
          { text: "v1", link: "/changelog/v1" },
        ],
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/steeven-js" },
    ],
    // Sidebar
    sidebar: [
      {
        text: 'Pour commencer',
        collapsed: false,
        items: [
          { text: 'Se connecter', link: '/get-started/' },
          { text: 'Mon profile', link: '/get-started/mon-profile' },
        ]
      },
      {
        text: 'Tableau de bord',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/admin/' },
          { text: 'Client(e)s', link: '/admin/client' },
          { text: 'Désignation', link: '/admin/designation' },
          { text: 'Créer une livraison', link: '/admin/livraison' },
          { text: 'Créer un bon de livraison', link: '/admin/pdf' },
        ]
      },
      {
        text: 'Gestion des bon de livraison',
        collapsed: true,
        items: [
          { text: 'Impression', link: '/pdf/impression' },
          { text: 'Envoi par mail', link: '/pdf/mail' },
        ]
      },
    ],
    footer: {
      copyright: "Copyright © 2023-present Aquaphoenix",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    search: {
      provider: 'local'
    },
  }
})
