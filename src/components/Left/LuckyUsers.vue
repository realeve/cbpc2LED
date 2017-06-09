<template>
  <div>
    <div class="wrap-title">幸运楼层</div>
    <div class="sub-title">LUCKY USERS</div>
    <div class="data-wrapper">
      <div class="user-info" v-for="i of 5" :key="i">
        <img class="header" src="/static/avatar.jpg">
        <div class="nickname last">宾不厌诈</div>
        <div class="nickname last">#{{i*200+16}}</div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        commentData: []
      }
    },
    methods: {
      getData() {


      },
      init() {
        this.getData();

      }
    },
    mounted() {
      this.init();
    }
  }

</script>

<style scoped lang="less">
  .text,
  {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .wrap-title {
    color: #fff;
    height: 20px;
    font-size: 22px;
    .text;
  }

  .sub-title {
    width: 100%;
    height: 32px;
    color: rgb(255, 204, 0);
    font-size: 10px;
    .text;
  }

  .trans-border {
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

  .data-wrapper {
    .trans-border;
    height: 140px;
    width: 100%; // box-shadow: 0 0 14px #195df3;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
  }

  @userPicSize:80px;

  .user-info {
    margin: 10px;
    .header {
      width: @userPicSize;
      height: @userPicSize;
      padding: 1px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 0 24px #195df5;
    }
    
    .nickname {
      font-size: 10pt;
      color: #ddd;
      text-align: center;
    }
  }   

</style>
