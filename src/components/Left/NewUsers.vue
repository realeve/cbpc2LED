<template>
  <div>
    <div class="wrap-title">新增用户</div>
    <div class="sub-title">NEW USERS</div>
    <div class="data-wrapper">
      <transition-group leave-active-class="animated fadeOutLeft" enter-active-class="animated fadeInRight">
      <!--<transition-group name="list-complete">-->
        <div class="user-info flip-list" v-for="item in showingData" :key="item.id">
          <img class="header" :src="item.headimgurl">
          <div class="nickname last">{{item.nickname}}</div>
        </div>
      </transition-group>
    </div>
  </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        showingData: [],
        queueData: [],
        curId: 0,
      }
    },
    watch: {
      queueData(val) {
        let len = val.length;
        if (len == 0) {
          return;
        }
        let i = 0;
        let iTick = setInterval(() => {
          this.showingData.push(val[i]);
          this.showingData.shift();
          i++;
          // 如果循环完毕，开始读取下一组数据
          if (i == len) {
            this.getData();
            clearInterval(iTick);
          }
        }, 1000);
      }
    },
    methods: {
      getData() {
        let url = 'http://cbpc540.applinzi.com/index.php';
        let params = {
          s: '/addon/Api/Api/newUsers',
          curid: this.curId
        }
         // 测试数据时显示较多用户信息，正式布置需去掉此参数
        if (process.env.NODE_ENV == 'development') {
          params.isTest = 1;
        }

        this.$http.jsonp(url, {
          params
        }).then(res => {

          // 如果当前无数据，5秒后重新读取
          if (res.data.length == 0) {
            this.refreshData();
            return;
          }

          this.queueData = res.data;

          this.curId = res.data[res.data.length - 1].id;

          if (this.showingData.length == 0) {
            this.showingData = this.queueData.splice(0, 4);
          }

        })
      },
      refreshData() {
        setTimeout(() => {
          this.getData();
        }, 5000);
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
  @userPicSize: 60px;
  .user-info {
    // margin: -5px 10px 5px 10px;
    margin: -5px 5px 5px 5px;
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
      margin-top: -2px;
      max-width: 70px;
      line-height: 15px;
    }
  }

  .data-wrapper {
    height: 80px;
  }

  .flip-list {
    display: inline-block; // 无此属性则为纵向排列
    transition: all 1s;
  }

  .animated {
    position: absolute;
  }

</style>
