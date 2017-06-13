<template>
  <div>
    <div class="wrap-title">幸运楼层</div>
    <div class="sub-title">LUCKY USERS</div>
    <div class="data-wrapper">
      <div class="user-info" v-for="item in luckyUsers" :key="item.id">
        <img class="header" :src="item.headimgurl">
        <div class="nickname last">{{item.nickname}}</div>
        <div class="nickname last">#{{item.id}}</div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        luckyUsers: []
      }
    },
    methods: {
      getData() {
        let url = 'http://cbpc540.applinzi.com/index.php';
        let params = {
          s: '/addon/Api/Api/luckyUser'
        }
        this.$http.jsonp(url, {
          params
        }).then(res => {
          this.luckyUsers = res.data;
        })
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
  .data-wrapper {
    height: 90px;
  }

  @userPicSize: 60px;

  .user-info {
    margin: -5px 10px 5px 10px;
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
      line-height: 12pt;
    }
  }

</style>
