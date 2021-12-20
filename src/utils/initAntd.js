/* ant-design-vue 按需加载 */
import {
  Button,
  Modal,
  ConfigProvider,
  Icon,
  Tabs,
  Switch,
  Form,
  Upload,
  Checkbox,
  Input,
  Layout,
  Breadcrumb,
  Menu,
  Pagination,
  DatePicker,
  Popover,
  Table,
  Tree
} from 'ant-design-vue'

function initAntd (Vue) {
  Vue.use(Button)
  Vue.use(Modal)
  Vue.use(ConfigProvider)
  Vue.use(Icon)
  Vue.use(Tabs)
  Vue.use(Form)
  Vue.use(Upload)
  Vue.use(Checkbox)
  Vue.use(Input)
  Vue.use(Layout)
  Vue.use(Breadcrumb)
  Vue.use(Menu)
  Vue.use(Pagination)
  Vue.use(DatePicker)
  Vue.use(Popover)
  Vue.use(Table)
  Vue.use(Tree)
  Vue.use(Switch)
}

export default initAntd
