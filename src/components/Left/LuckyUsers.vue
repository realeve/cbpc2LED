<template>
  <div>
    <div class="wrap-title">幸运楼层</div>
    <div class="sub-title">LUCKY USERS</div>
    <div class="data-wrapper">
      <transition-group leave-active-class="animated fadeOutLeft" enter-active-class="animated fadeInRight">
        <div class="user-info flip-list" v-for="item in showingData" :key="item.id">
          <img class="header" :src="item.headimgurl">
          <div class="nickname last">{{item.nickname}}</div>
          <div class="nickname last">#{{item.id}}</div>
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
          this.showingData.shift();
          this.showingData.push(val[i]);
          i++;
          // 如果循环完毕，开始读取下一组数据
          if (i == len) {
            clearInterval(iTick);
            this.getData();
          }
        }, 1000);
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
          if (this.showingData.length == 0) {
            this.showingData = res.data.splice(0, 4);
          }
          this.queueData = res.data;
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

  .flip-list {
    display: inline-block; // 无此属性则为纵向排列
    transition: all 1s;
  }

  .animated {
    position: absolute;
  }

</style>
