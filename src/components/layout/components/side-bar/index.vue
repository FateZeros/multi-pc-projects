<template>
  <a-menu
    mode="inline"
    :default-selected-keys="['1']"
    :default-open-keys="['sub1']"
  >
    <template v-for="item in allMenuList">
      <a-sub-menu
        v-if="item.childern && item.children.length > 0"
        :key="item.path"
      >
        <template>
        </template>
      </a-sub-menu>
      <a-menu-item
        v-else
        :key="item.path"
      >
        {{item.meta.title}}
      </a-menu-item>
    </template>
    <!-- <SidebarItem
      v-for="route in allMenuList"
      :key="route.path"
      :item="route"
    /> -->
  </a-menu>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
  name: 'side-bar',

  data() {
    return {
      allMenuList: []
    }
  },

  components: {
    SidebarItem
  },

  mounted() {
    const allRoutes = this.$router.options.routes
    const allMenuList = allRoutes.filter(item => item.isMenu)
    console.log(allMenuList, 222)
    this.allMenuList = allMenuList
  }
}
</script>
