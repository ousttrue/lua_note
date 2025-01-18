import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "lua note",
  description: "A VitePress Site",
  srcDir: "docs",
  base: "/lua_note/",
  themeConfig: {
    logo: '/Lua-Logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Lua',
        items: [
          {
            text: 'impl',
            items: [
              { text: 'lua-5.1', link: '/impl/lua51/' },
              { text: 'luajit', link: '/impl/luajit/' },
              { text: 'lua-5.2', link: '/impl/lua52/' },
              { text: 'lua-5.3', link: '/impl/lua53/' },
              { text: 'lua-5.4', link: '/impl/lua54/' },
            ]
          },
          {
            text: 'tools',
            items: [
              {
                text: 'luarocks', link: '/tools/luarocks/', items: [
                  { text: 'rockspec', link: '/tools/rockspec/' },
                ]
              },
              { text: 'language server', link: '/tools/lua_ls/' },
            ]
          },
          { text: 'version', link: '/version/' },
          { text: 'bytecode', link: '/bytecode/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ousttrue/lua_note' }
    ]
  }
})
