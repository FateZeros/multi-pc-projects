<template>
  <div class="common-login-wrap">
    <div class="common-login-title">
      <div class="common-login-logo"></div>
      Fate Design
    </div>
    <div class="common-login-form-wrap">
      <a-tabs default-active-key="1">
        <a-tab-pane
          key="1"
          tab="账号密码登录"
        >
          <a-form
            :form="form"
            @submit="handleLogin"
          >
            <a-form-item>
              <a-input
                placeholder="请输入账号"
                class="diy-input"
                v-decorator="[
                  'userName',
                  { rules: [{ required: true, message: '请输入账号!' }] },
                ]"
                autocomplete="off"
              >
                <a-icon
                  slot="prefix"
                  type="user"
                  style="color:rgba(0,0,0,.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                placeholder="请输入密码"
                class="diy-input"
                type="password"
                v-decorator="[
                  'password',
                  { rules: [{ required: true, message: '请输入密码!' }] },
                ]"
                autocomplete="off"
              >
                <a-icon
                  slot="prefix"
                  type="lock"
                  style="color:rgba(0,0,0,.25)"
                />
              </a-input>
            </a-form-item>
            <a-row>
              <a-checkbox>
                记住密码
              </a-checkbox>
            </a-row>
            <a-form-item style="margin-top: 0.12rem;">
              <a-button
                type="primary"
                html-type="submit"
                style="width: 100%; height: 0.4rem;"
              >
                登录
              </a-button>
            </a-form-item>
          </a-form>
        </a-tab-pane>
      </a-tabs>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer'
import loginApi from '@/apis'

/** 通用登录页面 */
export default {
  name: 'common-login',

  data() {
    return {
      form: this.$form.createForm(this, { name: 'form_login' })
    }
  },

  components: {
    Footer
  },

  methods: {
    handleLogin(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          loginApi.commonLogin(values).then(res => {
            console.log(res, '登录接口')
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
