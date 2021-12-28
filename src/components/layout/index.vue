<template>
  <div class="app-layout-wrap">
    <a-layout-header>
      <div class="app-header-logo"></div>
    </a-layout-header>
    <a-layout class="app-layout-content">
      <a-layout-sider>
        <Sidebar />
      </a-layout-sider>
      <a-layout-content>
        <AppMain />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { AppMain, Sidebar } from './components'

/** 典型布局 Layout */
export default {
  name: 'Layout',

  components: {
    AppMain,
    Sidebar
  },

  mounted() {
    console.log(this.PAGE_CONFIG, '==== 项目配置 ===')
  }
}
</script>

<style lang="scss" scoped>
.app-layout-wrap {
  width: 100%;
  height: 100%;

  .app-header-logo {
    width: rem(120px);
    height: rem(30px);
    background: hsla(0, 0%, 100%, 0.2);
  }

  .app-layout-content {
    width: 100%;
    height: 100%;
  }

  ::v-deep {
    .ant-layout-header {
      background: $primary-header-color;
      display: flex;
      align-items: center;
    }

    .ant-layout-sider {
      background: $primary-sider-color;
    }
  }
}
</style>
