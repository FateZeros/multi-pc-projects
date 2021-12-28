<script>
import { AppMain } from './components'

/** 典型布局 Layout */
export default {
  name: 'Layout',

  components: {
    AppMain
  },

  render() {
    return (
      <div class="app-layout-wrap">
        <a-layout-header />
        <a-layout class="app-layout-content">
          <a-layout-sider>Sider</a-layout-sider>
          <a-layout-content>
            <AppMain />
          </a-layout-content>
        </a-layout>
      </div>
    )
  }
}
</script>
