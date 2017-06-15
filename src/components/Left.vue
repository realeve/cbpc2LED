<template>
  <div>
    <div>
      <new-users/>
      <v-chart class="margin-top-15"/>
      <lucky-users class="margin-top-15"/>
      <qr-tip class="margin-top-15"/>
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
  .margin-top-15{
    margin-top:8px;
  }
</style>
