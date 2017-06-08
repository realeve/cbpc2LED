<template>
  <div>
    <div class="header">
      <div class="number">2</div>
      <div class="word">
        <div class="title">品质成钞</div>
        <div class="sub-title">周年庆</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    }
  }

</script>

<style scoped lang="less">
  @white: #fff;
  @main-yellow:#f5b018;
  .header {
    padding-top:20px;
    display: flex;
    justify-content: center;
  }


  .number {
    color: @white;
    text-shadow: 0 6px 6px #c4b59d, 0px -1px 1px #fff;
    line-height: 0pt;
    font-size: 80pt;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .word {
    .title,
    .sub-title {
      color: @white;
      text-align: center;
      font-size: 40pt;
      font-weight: 100;
      line-height: 35pt;
      letter-spacing: 25px;
    }
    .title {
      font-size: 30pt;
    }
  }

</style>
