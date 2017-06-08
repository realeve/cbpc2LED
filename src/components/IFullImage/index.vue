<template>
  <div>
    <div class="page-bg"></div>
    <div class="bg-dot"></div>
    <div class="fixedcon">
      <div class="control">
        <i class="fullsc show" :class="{'enabled':isFullScreen}" @click="fullScreen" title="全屏模式"></i>
        <i class="music show" :class="{mute}" title="背景音乐" @click="audioPlayer"></i>
        <audio src="./static/bg.mp3" autoplay loop="loop" ref="audio"></audio>
      </div>
    </div>
  </div>
</template>
<style scoped>
  @import "./style.css";

</style>
<script>
   export default {
    data() {
      return {
        toBottom: false,
        isFullScreen: false,
        mute: false,
      }
    },
    computed: {
      player() {
        return this.$refs.audio;
      }
    },
    methods: {
      // isFullScreen(){
      //  return (document.fullscreen||document.mozFullScreen|| document.webkitIsFullScreen||document.msFullscreenElement);
      // },
      getScrollTop() {　　
        var scrollTop = 0,
          bodyScrollTop = 0,
          documentScrollTop = 0;　　
        if (document.body) {　　　　
          bodyScrollTop = document.body.scrollTop;　　
        }　　
        if (document.documentElement) {　　　　
          documentScrollTop = document.documentElement.scrollTop;　　
        }　　
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;　　
        return scrollTop;
      },
      //文档的总高度
      getScrollHeight() {　　
        var scrollHeight = 0,
          bodyScrollHeight = 0,
          documentScrollHeight = 0;　　
        if (document.body) {　　　　
          bodyScrollHeight = document.body.scrollHeight;　　
        }　　
        if (document.documentElement) {　　　　
          documentScrollHeight = document.documentElement.scrollHeight;　　
        }　　
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;　　
        return scrollHeight;
      },
      //浏览器视口的高度
      getWindowHeight() {　　
        var windowHeight = 0;　　
        if (document.compatMode == "CSS1Compat") {　　　　
          windowHeight = document.documentElement.clientHeight;　　
        } else {　　　　
          windowHeight = document.body.clientHeight;　　
        }　　
        return windowHeight;
      },
      enterFullScreen() {
        var docElm = document.documentElement;
        //W3C  
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        }
        //FireFox  
        else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        }
        //Chrome等  
        else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        }
        //IE11
        else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      },
      exitFullScreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      },
      fullScreen() {
        if (this.isFullScreen) {
          this.exitFullScreen();
        } else {
          this.enterFullScreen();
        }
        this.isFullScreen = !this.isFullScreen;
      },
      initEvent() {
        window.onscroll = () => {　　
          if (this.$route.path == '/dashboard' || this.$route.path == '/') {
            if (this.getScrollTop() + this.getWindowHeight() == this.getScrollHeight()) {　　　　
              this.toBottom = true;　
            } else {
              this.toBottom = false;
            }
          } else {
            this.toBottom = true;
          }
        };
      },
      audioPlayer() {
        if (this.player.paused) {
          this.player.play();
        } else {
          this.player.pause();
        }
        this.mute = !this.mute;
      }
    },
    mounted() {
      this.initEvent();
      this.player.volume = 0.4;
    },
    activated(){
      this.player.play();
    }
  }
</script>
