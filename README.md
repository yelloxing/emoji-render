# emoji - 自定义表情图片启动者，支持更丰富的字符输入

<p>
  <a href="https://yelloxing.gitee.io/npm-downloads?interval=7&packages=emoji-render"><img src="https://img.shields.io/npm/dm/emoji-render.svg" alt="downloads"></a>
  <a href="https://packagephobia.now.sh/result?p=emoji-render"><img src="https://packagephobia.now.sh/badge?p=emoji-render" alt="install size"></a>
  <a href="https://www.jsdelivr.com/package/npm/emoji-render"><img src="https://data.jsdelivr.com/v1/package/npm/emoji-render/badge" alt="CDN"></a>
  <a href="https://www.npmjs.com/package/emoji-render"><img src="https://img.shields.io/npm/v/emoji-render.svg" alt="Version"></a>
  <a href="https://github.com/yelloxing/emoji-render/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/emoji-render.svg" alt="License"></a>
</p>

## 如何使用

```bash
npm install --save emoji-render
```

我们目前只支持npm方式，由于源码采用的是ES5以前的语法，因此可以不添加babel。

```js
import emojiRender from 'emoji-render';

emojiRender('::rocket(火箭)：可以去太空');
// 结果：🚀(火箭)：可以去太空

```

# 对照表

表情
----------------------
| | | | | | | |
|-|-|-|-|-|-|-|
|::ghost 👻|::smile 😊|::cry 😭|::sad 😟|

动物
----------------------
| | | | | | | |
|-|-|-|-|-|-|-|
|::dog 🐕|::cat 🐈|::pig 🐖|::fox 🦊|::wolf 🐺|::mouse 🐁|::owl 🦉|
|::snake 🐍|::dolphin 🐬|::fish 🐟|::butterfly 🦋|::ant 🐜|::ox 🐂|::elephant 🐘|
|::panda 🐼|

水果
----------------------
| | | | | | | |
|-|-|-|-|-|-|-|
|::strawberry 🍓|::banana 🍌|::orange 🍊|::watermelon 🍉|::grape 🍇|

交通工具
----------------------
| | | | | | | |
|-|-|-|-|-|-|-|
|::rocket 🚀|::bus 🚌|::airplane ✈️|::metro 🚇|::train 🚆|::bicycle 🚲|::motorcycle 🏍️|
|::car 🚓|::ambulance 🚑|::fire-engine 🚒|

## 开源协议

[MIT](https://github.com/yelloxing/emoji-render/blob/master/LICENSE)

Copyright (c) 2020 走一步 再走一步