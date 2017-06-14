<template>
  <div>
    <div ref="chart" class="chart">
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import chinaJson from './js/china.json';
  import mapChart from './js/mapOption.js';

  export default {
    data() {
      return {
        cityData: []
      }
    },
    computed: {
      chart() {
        return echarts.init(this.$refs.chart)
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
        let url = 'http://cbpc540.applinzi.com/index.php';
        let params = {
          s: '/addon/Api/Api/commentByCity',
          type: 1
        }
        this.$http.jsonp(url, {
          params
        }).then(res => {
          this.cityData = res.data;
          this.chart.setOption(mapChart.refresh(this.cityData));
        })
      },
      refreshChart() {
        this.chart.setOption(mapChart.init());
        this.getData();

        // 20秒更新一次数据
        setInterval(() => {
          this.getData();
        }, 20000);
      },
      init() {
        echarts.registerMap('china', chinaJson);
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
  .chart {
    width: 100%;
    height: 550px;
  }

</style>
