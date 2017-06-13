<template>
  <div>
    <div class="wrap-title margin-top-10">实时留言</div>
    <div class="sub-title">REALTIME MESSAGE</div>
    <div class="comment-wrapper">
      <!--<transition-group name="flip-list" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutUp">-->
      <!-- name="list-complete" 自定义样式   mode="in-out"-->
      <transition-group leave-active-class="animated fadeOutUp" enter-active-class="animated fadeInUp">
        <div class="comment flip-list" v-for="item in showingData" :key="item.id">
          <div class="user-info">
            <img class="header" :src="item.headimgurl">
          </div>
          <div class="comment-content">
            <div class="nickname">#{{item.id}} {{item.nickname}}</div>
            <p class="comment-data">{{item.content}}</p>
          </div>
        </div>
      </transition-group>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        queueData: [],
        showingData: [],
        curid:0,
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
        }, 500);
      }
    },
    methods: {
      getData() {
        let url = 'http://cbpc540.applinzi.com/index.php';
        let params = {
          s: '/addon/Api/Api/getRealtimeComment',
          curid:this.curid
        }
        this.$http.jsonp(url, {
          params
        }).then(res => {

          // 如果当前无数据，5秒后重新读取
          if(res.data.length == 0){
            this.refreshData();
            return;
          }
          // 如果有数据，推送至队列中
          this.queueData = res.data;

          // 记录当前ID位置
          this.curid = res.data[res.data.length-1].id;

          // 初始读取时，加载前4条数据
          if(this.showingData.length == 0){
            this.showingData = this.queueData.splice(0, 4);
          } 
        })
      },
      refreshData(){
        setTimeout(()=>{
          this.getData();
        },5000);
      }
    },
    mounted() {
        this.getData();
    }
  }

</script>

<style scoped lang="less">
  .wrap-title {
    justify-content: flex-end;
  }

  .sub-title {
    justify-content: flex-end;
  }

  .comment-wrapper {
    height: 340px;
  }

  .center {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .comment {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    background: rgba(18, 18, 63, 0.7);
    padding: 3px;
    border-radius: 4px;
    border: #443e9d solid 1px;
    box-shadow: 0 0 5px #195df3;
    font-size: 10pt;
  } // .comment:nth-child(1) {
  //   margin-top: 0px;
  // }
  .user-info {
    display: flex; // flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;

    .header {
      width: 60px;
      height: 60px;
      padding: 1px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 0 24px #195df5;
    }
    .city {
      font-size: 11pt;
      color: #eee;
    }
    .nickname {
      font-size: 11pt;
      color: #fc0;
    }
  }

  .comment-content {
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 1em;
    height: 100%;
    .nickname {
      font-size: 11pt;
      color: #fc0; // rgb(15, 210, 240);
    }
    .comment-data {
      // text-indent: 2em;
      min-width: 270px;
    }
  }

  .list-complete-item,
  .flip-list {
    transition: all 1s;
  } // .list-complete-enter {
  //   opacity: 0;
  //   transform: translateY(30px);
  // }
  // .list-complete-leave-active {
  //   opacity: 0;
  //   transform: translateY(-30px);
  // }
  .list-complete-leave-active,
  .animated {
    position: absolute;
  }

</style>
