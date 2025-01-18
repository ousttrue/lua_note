[Lua Language Server | Home](https://luals.github.io/)

- https://github.com/LuaLS/lua-language-server

# annotation

# configuration

https://luals.github.io/wiki/configuration/#luarcjson-file

## `workspace/.luarc.json`

https://github.com/LuaLS/vscode-lua/blob/master/setting/schema-ja-jp.json

### luv(standalone)

```json
{
  "version": "LuaJIT",
  "workspace": {
    "library": ["${3rd}/luv/library"]
  }
}
```

```lua
---@type uv
local uv = require "luv"
```

### love2d

```json
{
  "version": "LuaJIT",
  "workspace": {
    "library": ["${3rd}/love2d/library"]
  }
}
```

# nvim

- @2024 [Neovim Lua のための LuaLS セットアップ](https://zenn.dev/uga_rosa/articles/afe384341fc2e1)
- @2021 [【VSCode】VSCodeでLuaエディタlua-language-serverを使う - LIGHT11](https://light11.hatenadiary.com/entry/2021/09/16/204030)
