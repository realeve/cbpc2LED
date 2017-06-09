<template>
</template>

<script>
  // import Countup from 'countUp.js'
  let Countup = require('./countUp.js').CountUp;
  export default {
    mounted() {
      this.$nextTick(() => {
        this._countup = new Countup(this.$el, this.startVal, this.endVal, this.decimals, this.duration, this.options)
        if (this.start) {
          this._countup.start()
        }
      })
    },
    props: {
      start: {
        type: Boolean,
        default: true
      },
      startVal: {
        type: Number,
        default: 0
      },
      endVal: {
        type: Number,
        required: true
      },
      // number of decimal places in number
      decimals: {
        type: Number,
        default: 0
      },
      // duration in seconds
      duration: {
        type: Number,
        default: 2
      },
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    watch: {
      start(val) {
        if (val) {
          this._countup.start()
        }
      },
      endVal(val) {
        this._countup.update(val)
      }
    }
  }

</script>
<style>
  .counter-number {
    background-color: rgb(52, 19, 68);
    display: inline-block;
    letter-spacing: 0.02em;
    text-indent: 0.02em;
    height: auto;
    line-height: normal;
    font-size: 56px;
    letter-spacing: 0.02em;
    margin-right: 0.2em;
  }

</style>
