import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Login from "../views/Login"
import Main from "../views/Main"
import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile";
import NotFound from "../views/NotFound";

Vue.use(Router);

export default new Router({
  mode: 'history',//路径不带#符号
  routes: [
    {
      path: '/main/:name',
      props: true,
      component: Main,
      //嵌套路由
      children: [
        //{path: '/user/profile',component: UserProfile},

        //参数传递及重定向 方法一
        //{path: '/user/profile/:id',name: 'UserProfile',component: UserProfile},

        //参数传递及重定向 方法二
        {path: '/user/profile/:id',name: 'UserProfile',component: UserProfile,props:true},
        {path: '/user/list',component: UserList}
      ]
    },
    {
      path: '/goHome',
      redirect: '/main/:name',
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      component: NotFound,
    }
  ]
});
