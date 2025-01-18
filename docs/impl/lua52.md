# 5.2

[Lua 5.2 Reference Manual#8 – Incompatibilities with the Previous Version](http://www.lua.org/manual/5.2/manual.html#8)

https://www.lua.org/manual/5.2/readme.html#changes

## unpack => table.unpack

> Since Lua 5.2 unpack function is now at table.unpack

## removed: newproxy

- @2010 [newproxy - 野良C++erの雑記帳](https://gintenlabo.hatenablog.com/entry/20100903/1283521878)

## getfenv/setfenv => \_ENV

- @2019 [Luaのモジュール徹底解説（Lua 5.1〜5.3対応） #Lua - Qiita](https://qiita.com/mod_poppo/items/ef3d8a6fe03f7f426426)

> \_ENV と呼ばれる上位値になったのは Lua 5.2 以降の話で、 Lua 5.1 時代は同様のものが getfenv/setfenv

- [Lua 5.2.0をNiosIIに移植する：如是我聞～これからＦＰＧＡの話をしよう～：SSブログ](https://j-7system.blog.so-net.ne.jp/2012-05-08)

  > 5.2.0からgcc4のコンパイラを前提としたコード記述をしているよう

- [Lua 5.1とLua5.2の違い - エンジニアのソフトウェア的愛情](https://blog.emattsan.org/entry/20120609/1339204385)

> gotoの追加

### deprecated: luaL_register

- => luaL_requiref
- luaL_newlib(はグローバル変数登録しない)
- @2012 [Lua 5.1とLua 5.2の非互換について - エンジニアのソフトウェア的愛情](https://blog.emattsan.org/entry/20120416/1334584047)

  - getfenv コンセプト変更にともない削除
  - setfenv コンセプト変更にともない削除
  - module コンセプト変更にともない不要になった
  - loadstring loadに統合
  - unpack => table.unpack
  - newproxy was deprecated in Lua 5.1 and removed in Lua 5.2.

- [c - Embedding Lua 5.2 and defining libraries - Stack Overflow](https://stackoverflow.com/questions/13442907/embedding-lua-5-2-and-defining-libraries)
