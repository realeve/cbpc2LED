<template>
  <div>
    <top-comment/>
    <real-comment class="margin-top-10"/>
  </div>
</template>

<script>
  import TopComment from './Right/TopComment.vue';
  import RealComment from './Right/RealComment.vue';

  export default {
    components: {
      TopComment,
      RealComment
    }
  }
</script>

<style scoped lang="less">
  .margin-top-10{
    margin-top:10px;
  }
</style>
