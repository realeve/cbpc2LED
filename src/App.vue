<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  /* 生活服务楼 */
html{
  width:1280px;
  height:704px;
} 
  /* 办公楼 */
/*
  html {
    width: 896px;
    height: 512px;
  }
*/
</style>
