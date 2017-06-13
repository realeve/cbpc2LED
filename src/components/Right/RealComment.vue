<template>
  <div>
    <div class="wrap-title margin-top-10">实时留言</div>
    <div class="sub-title">REALTIME MESSAGE</div>
    <div class="comment-wrapper">
      <!--<transition-group name="flip-list" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutUp">-->
      <!-- name="list-complete" 自定义样式   mode="in-out"-->
      <transition-group leave-active-class="animated fadeOutUp" enter-active-class="animated fadeInUp">
        <div class="comment flip-list" v-for="item in commentData" :key="item.floor">
          <div class="user-info">
            <img class="header" :src="item.header" alt="">
          </div>
          <div class="comment-content">
            <div class="nickname">#{{item.floor}} {{item.nickname}}</div>
            <p class="comment-data">{{item.comment}}</p>
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
        commentData: []
      }
    },
    methods: {
      getData(floor) {
        for (var i = 0; i < 3; i++) {
          this.commentData.push({
            header: '/static/avatar.jpg',
            nickname: '宾不厌诈',
            comment: '腾讯互娱年度发布会，自2012年开始打造“UP”主题已成为这一活动乃至腾讯互娱的重要品牌标签。',
            floor: floor + i
          });
        }
      },
      init() {
        let i = 899;
        this.getData(i);

        // let j=0;
        // setInterval(() => {
        //   this.commentData[j].show = false;
        //   j++   
        // }, 3000);
        setInterval(() => {
          this.commentData.push({
            header: '/static/avatar.jpg',
            nickname: '宾不厌诈',
            comment: '腾讯互娱年度发布会，自2012年开始打造“UP”主题已成为这一活动乃至腾讯互娱的重要品牌标签,发布会上提出的“泛娱乐”战略也已获得行业的认可与跟随。',
            floor: i + 4
          });
          // this.commentData.sort((b,a)=>a.floor-b.floor);
          // this.commentData.pop();
          this.commentData.shift();
          i++;
        }, 1500)

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
    font-size:10pt;
  }

  // .comment:nth-child(1) {
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
      text-indent: 2em;
    }
  }

  .list-complete-item,
  .flip-list {
    transition: all 1s;
  }
  // .list-complete-enter {
  //   opacity: 0;
  //   transform: translateY(30px);
  // }
  // .list-complete-leave-active {
  //   opacity: 0;
  //   transform: translateY(-30px);
  // }
  .list-complete-leave-active,
  .fadeOutUp {
    position: absolute;
    padding-right:15px;
  }

</style>
