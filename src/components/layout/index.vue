<template>
  <div class="app-layout-wrap">
    <a-layout-header></a-layout-header>
    <a-layout class="app-layout-content">
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout-content>
        <AppMain />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { AppMain } from './components'

/** 典型布局 Layout */
export default {
  name: 'Layout',

  components: {
    AppMain
  }
}
</script>

<style lang="scss" scoped>
.app-layout-wrap {
  width: 100%;
  height: 100%;

  .app-layout-content {
    width: 100%;
    height: 100%;
  }

  ::v-deep {
    .ant-layout-header {
      background: $primary-header-color;
    }

    .ant-layout-sider {
      background: $primary-sider-color;
    }
  }
}
</style>
