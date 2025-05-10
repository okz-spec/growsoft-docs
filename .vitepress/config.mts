import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "GrowSoft Docs",
  description: "Technical documentation for GrowSoft Lua API",
  appearance: 'force-dark',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/lock.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: '🧰 Functions',
        items: [
          { text: '🕹 Social Portal Button', link: 'Functions/socialportalbutton-function' }
        ]
      },
            {
        text: '📡 Information',
        items: [
          { text: '⚔️ Dialog String Syntax', link: 'Information/dialogstringsyntax' },
          { text: '🗃 Playmod IDs', link: 'Information/playmodids' },
          { text: '👊🏻 Punch IDs', link: 'Information/punchids' }
        ]
      },
      {
        text: '🔧 Structures',
        items: [
          { text: '📞 Callback structure', link: 'Structures/callback-structure' },
          { text: '⌨️ Command structure', link: 'Structures/command-structure' },
          { text: '🦠 Drop structure', link: 'Structures/drop-structure' },
          { text: '📦 Inventory structure', link: 'Structures/inventory-structure' },
          { text: '🧱 Item structure', link: 'Structures/item-structure' },
          { text: '👩‍💻 Player structure', link: 'Structures/player-structure' },
          { text: '🖥 Server structure', link: 'Structures/server-structure' },
          { text: '🖥 System structure', link: 'Structures/system-structure' },
          { text: '⚙️ Tile structure', link: 'Structures/tile-structure' },
          { text: '🏔 World structure', link: 'Structures/world-structure' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cl4ssicMan/GrowSoft-Luascript-Docs' },
      { icon: 'discord', link: 'https://discord.gg/QCF6RaZrpS' },
      { icon: 'google', link: 'https://growsoft.cc/' }
    ]
  }
})
