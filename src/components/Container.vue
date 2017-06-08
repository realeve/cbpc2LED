<template>
  <div>
    <full-image/>
    <v-header/>
    <flexbox :gutter="0" wrap="wrap" class="content">
      <flexbox-item :span="1/4">
        <div class="left-content">占位文字</div>
      </flexbox-item>
      <flexbox-item :span="1/2">
        <div class="center-content">
          <v-map/>
        </div>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <div class="right-content">占位文字</div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import FullImage from './IFullImage/index'
  import VHeader from './Header/';
  import VMap from './Map.vue';

  import {
    Flexbox,
    FlexboxItem
  } from 'vux';

  export default {
    components: {
      Flexbox,
      FlexboxItem,
      FullImage,
      VHeader,
      VMap
    }
  }

</script>
<style scoped lang="less">
  @content-height:700px;
  .content {
    margin-top: -200px;
    color: #fff;
  }

  .center-content {
    padding: 20px;
    padding-top: 220px;
  }

  .left-content,
  .right-content {
    padding: 20px;
    height: @content-height;
    background: rgba(38, 27, 77, 0.8);
  }

</style>
