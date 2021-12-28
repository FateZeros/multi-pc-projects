<template>
  <a-sub-menu v-if="item.children && item.children.length > 0">
    12
  </a-sub-menu>
  <a-menu-item v-else>
    {{item.meta.title}}
  </a-menu-item>
</template>

<script>
export default {
  name: 'sidebar-item',

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  watch: {
    item(val) {
      console.log(val, 1212)
    }
  }
}
</script>
