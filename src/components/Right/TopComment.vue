<template>
  <div>
    <div class="wrap-title">精选留言</div>
    <div class="sub-title">EXCELLENT MESSAGE</div>
    <div class="data-wrapper">

      <transition-group leave-active-class="animated zoomOut" enter-active-class="animated zoomIn" mode="in-out">
        <div class="comment flip-list" v-for="item of selectedData" :key="item.id">
          <div class="user-info">
            <img class="header" :src="item.headimgurl" alt="">
            <div class="nickname last">{{item.nickname}}</div>
            <div class="city">{{item.province}} {{item.city}}</div>
          </div>
          <div class="comment-content">
            <!--<div class="nickname">宾不厌诈 FROM 四川 成都</div>-->
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
        commentData: [],
        selectedData: []
      }
    },
    watch: {
      commentData(val) {
        let i = 0;
        setInterval(() => {
          this.selectedData.shift();
          this.selectedData.push(val[i]);
          i++;
          if (i == val.length) {
            i = 0;
          }
        }, 4000);
      }
    },
    methods: {
      getData() {
        let url = 'http://cbpc540.applinzi.com/index.php';
        let params = {
          s: '/addon/Api/Api/getSelectedComment'
        }
        this.$http.jsonp(url, {
          params
        }).then(res => {
          this.commentData = res.data;
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
  .wrap-title {
    justify-content: flex-end;
  }

  .sub-title {
    justify-content: flex-end;
  }

  .data-wrapper {
    height: 170px;
    border: none;
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
    background: rgba(18, 18, 63, 0.7);
    padding: 5px;
    border-radius: 4px;
    border: #443e9d solid 1px;
    box-shadow: 0 0 10px #195df3;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 70px;
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
    padding-left: 5px;
    height: 100%;
    font-size: 10pt;
    .nickname {
      color: #fc0; // rgb(15, 210, 240);
    }
    .comment-data {
      text-indent: 2em;
      min-width: 270px;
    }
  }

  .flip-list {
    transition: all 1s;
  }

  .animated {
    position: absolute;
  }


</style>
