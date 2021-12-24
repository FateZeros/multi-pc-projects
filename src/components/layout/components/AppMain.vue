<template>
  <div class="app-main-wrap">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app-main',

  data() {
    return {
      cachedViews: []
    }
  },

  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main-wrap {
  width: 100%;
  height: 100%;
}
</style>
