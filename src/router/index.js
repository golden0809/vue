import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test2'
// import ForgotPassword from '@/components/ForgotPassword'
// import Test from '@/components/Test'
// import SignIn from '@/components/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    }
  ]
})
