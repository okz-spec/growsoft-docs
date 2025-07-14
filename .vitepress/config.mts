import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'en-US',
  title: "GrowSoft API Docs",
  description: "Documentation for GrowSoft Lua API",
  appearance: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/lock.png' }],
    ['meta', { property: 'og:image', content: '/GrowSoftDocsFooter.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/lock.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }
    ],
    
    sidebar: [
      {
        text: '📒 Tutorials [Development]',
      },
      {
        text: '📡 Information',
        items: [
          { text: '⚔️ Dialog String Syntax', link: 'pages/information/dialogstringsyntax' },
          { text: '🗃 Playmod IDs', link: 'pages/information/playmodids' },
          { text: '👊🏻 Punch IDs', link: 'pages/information/punchids' }
        ]
      },
      {
        text: '🔧 Structures',
        items: [
          { text: '📞 Callback structure', link: 'pages/structures/callback-structure' },
          { text: '⌨️ Command structure', link: 'pages/structures/command-structure' },
          { text: '🦠 Drop structure', link: 'pages/structures/drop-structure' },
          { text: '📦 Inventory structure', link: 'pages/structures/inventory-structure' },
          { text: '🧱 Item structure', link: 'pages/structures/item-structure' },
          { text: '👩‍💻 Player structure', link: 'pages/structures/player-structure' },
          { text: '🖥 Server structure', link: 'pages/structures/server-structure' },
          { text: '🖥 System structure', link: 'pages/structures/system-structure' },
          { text: '⚙️ Tile structure', link: 'pages/structures/tile-structure' },
          { text: '🏔 World structure', link: 'pages/structures/world-structure' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/QCF6RaZrpS' },
      { icon: 'google', link: 'https://growsoft.cc/' }
    ]
  }
})
