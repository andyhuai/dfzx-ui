# dfzx-ui

## Introduction

This is an UI framework based on Vue.

## demo

:point_right: [https://github.com/andyhuai/dfzx-ui](https://github.com/andyhuai/dfzx-ui)</br>

## Usage

1. Install package [dfzx-ui]
   ```sh
   npm i dfzx-ui
   ```
2. Get Started

```js
// 全局注册
import VaseUI from 'dfzx-ui';
Vue.use(VaseUI, { router });
import 'dfzx-ui/lib/dfzx-ui.css';
// 按需注册
import { Button, KeepAlive } from 'dfzx-ui';
Vue.use(Button).use(KeepAlive, { router });
```

```vue
// 全局注册
<template>
  <div id="app">
    <df-button type="primary">点击报名</df-button>
  </div>
</template>

<script>
export default {};
</script>
```
