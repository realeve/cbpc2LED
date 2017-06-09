<template>
  <div class="qrtip data-wrapper">
    <div class="qr-code">
      <div class="content"></div>
    </div>
    <div>
      <div class="wrap-title">参与留言</div>
      <div class="qr-info">扫描左侧二维码关注“品质成钞”，点击『两周年留言』菜单进入留言。</div>
    </div>
  </div>
</template>

<script>
  export default {
  }

</script>

<style scoped lang="less">
  .data-wrapper {
    border-radius: 0px;
    border-style: solid;
    border-width: 16px 17px 17px;
    border-image-source: url("./img/data-wrapper.png");
    border-image-slice: 16 17 17 fill;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: repeat;
    background: none;
  }

  @qrSize: 100px;
  .qrtip {
    height: @qrSize;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  .qr-code {
    background: rgba(255, 255, 255, 0.8);
    width: @qrSize;
    margin-right:1em;
  }

  .content {
    background-image: url('./img/qr.png');
    background-repeat: no-repeat;
    background-size: @qrSize @qrSize;
    width: @qrSize;
    height: @qrSize;
    box-shadow: 0 0 14px #195df3;
  }

  .text {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .wrap-title {
    color: #fff;
    font-size: 22px;
    height: 40px;
    .text;
  }

  .qr-info {
    color: #fff;
    font-size: 15px;
  }

  .full-height {
    height: @qrSize;
  }

</style>
