<script>
export default {
  name: 'side-bar',

  data() {
    return {
      allMenuList: []
    }
  },

  mounted() {
    const allRoutes = this.$router.options.routes
    const allMenuList = allRoutes.filter(item => item.name !== undefined)
    this.allMenuList = allMenuList[0].children
  },

  methods: {
    renderSubMenu(subTitle, menuChildren) {
      return (
        <a-sub-menu>
          <span slot="title">
            <span>{subTitle}</span>
          </span>
          {menuChildren.map(menu => {
            if (menu.children && menu.children.length > 0) {
              this.renderSubMenu(menu.children)
            } else {
              return (
                <a-menu-item key={menu.path}>
                  <router-link to={menu.path} exact>
                    {menu.meta.title}
                  </router-link>
                </a-menu-item>
              )
            }
          })}
        </a-sub-menu>
      )
    }
  },

  render() {
    return (
      <a-menu mode="inline">
        {this.allMenuList.map(menu => {
          if (menu.children && menu.children.length > 0) {
            return this.renderSubMenu(menu.meta.title, menu.children)
          } else {
            return (
              <a-menu-item key={menu.path}>
                <router-link to={menu.path} exact>
                  {menu.meta.title}
                </router-link>
              </a-menu-item>
            )
          }
        })}
      </a-menu>
    )
  }
}
</script>
