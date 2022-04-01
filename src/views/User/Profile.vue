<!--// 参数传递及重定向 方法一
<template>
  &lt;!&ndash;  所有的元素不能直接在根节点下&ndash;&gt;
  <div>
    <h1>个人信息</h1>
    {{$route.params.id}}
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>-->

// 参数传递及重定向 方法二
<template>
  <!--  所有的元素不能直接在根节点下-->
  <div>
    <h1>个人信息</h1>
    {{id}}
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: "Profile",
  beforeRouteEnter:(to, from, next)=>{
    console.log("进入路由之前！");
    next(vm => {
      vm.getData();//进入路由之前执行该方法
    });
  },beforeRouteLeave:(to, from, next)=>{
    console.log("进入路由之后！");
    next();
  },
  methods: {
    getData: function () {

      this.$axios({
        method: 'get',
        url: 'http://localhost:8080/static/mock/data.json',
      }).then(function (response) {
        console.log(response);
      })

      //return null;
    }
  }
}
</script>

<style scoped>

</style>


