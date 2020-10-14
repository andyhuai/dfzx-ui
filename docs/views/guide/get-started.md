---
title: '快速上手'
---

# 快速上手

```js
// 全局注册
import DfUI from 'dfzx-ui';
Vue.use(DfUI, { router });
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
