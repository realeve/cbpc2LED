<template>
  <div>
    <div ref="chart" class="chart data-wrapper">
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import lineChart from './js/lineOption.js';

  export default {
    data() {
      return {
        commentData: []
      }
    },
    components: {

    },
    computed: {
      chart() {
        return echarts.init(this.$refs.chart);
      }
    },
    methods: {
      resizeChart() {
        this.chart.resize();
      },
      initEvent() {
        window.onresize = () => {
          this.resizeChart();
        }
      },
      getData() {

      },
      refreshChart() {
        let lastData = lineChart.refresh();
        this.chart.setOption(lineChart.init());
        setInterval(() => {
          lastData = lineChart.refreshLine(lastData.series[0].data);
          this.chart.setOption(lastData);
        }, 1000);
      },
      init() {
        this.refreshChart();
        this.initEvent();
      }
    },
    mounted() {
      this.init();
    }
  }

</script>

<style scoped lang="less">
  .data-wrapper {
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

  .chart {
    height: 130px;
    width: 100%;
  }

</style>
