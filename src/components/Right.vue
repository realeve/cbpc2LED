<template>
  <div>
    <top-comment/>
    <real-comment class="margin-top-20"/>
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
  .margin-top-20{
    margin-top:30px;
  }
</style>
