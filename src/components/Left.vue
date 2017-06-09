<template>
  <div>
    <div>
      <new-users/>
      <v-chart class="margin-top-10"/>
      <lucky-users class="margin-top-10"/>
      <qr-tip class="margin-top-10"/>
    </div>

  </div>
</template>

<script>
  import VChart from './Chart/Bar.vue';
  import QrTip from './Left/QrTip.vue';
  import NewUsers from './Left/NewUsers.vue';
  import LuckyUsers from './Left/LuckyUsers.vue';

  export default {
    components: {
      VChart,
      QrTip,
      NewUsers,
      LuckyUsers
    },
  }

</script>

<style scoped lang="less">
  .margin-top-10{
    margin-top:10px;
  }
</style>
