<template>
  <div>
    <full-image/>
    <v-header/>
    <flexbox :gutter="0" wrap="wrap" class="content">
      <flexbox-item :span="2/7">
          <v-left class="left-content"/>
      </flexbox-item>
      <flexbox-item :span="3/7">
          <v-center class="center-content"/>
      </flexbox-item>
      <flexbox-item :span="2/7">
          <v-right class="right-content"/>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import FullImage from './IFullImage/index'
  import VHeader from './Header/';
  import VCenter from './Center.vue';
  import VLeft from './Left.vue';
  import VRight from './Right.vue';

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
      VLeft,
      VCenter,
      VRight
    }
  }

</script>
<style scoped lang="less">
  @content-height:460px;
  @div-offset:300px;
  .content {
    margin-top: -@div-offset;
    color: #fff;
  }

  .center-content {
    padding: 0 10px 0 50px;
    padding-top: 220px;
  }

  .left-content {
    padding: 0px 20px 0px 10px;
    height: @content-height;
  }
  .right-content {
    padding: 0px 15px 0px 0px;
    height: @content-height;
  }

</style>
