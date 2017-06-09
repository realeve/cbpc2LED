<template>
  <div>
    <div ref="chart" class="chart data-wrapper">
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import pieChart from './js/barOption.js';

  export default {
    data() {
      return {
        cityData: []
      }
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
        let cityData = [{
            name: '上海',
            value: 95
          },
          {
            name: '北京',
            value: 120
          },
          {
            name: '石家庄',
            value: 105
          },
          {
            name: '南昌',
            value: 90
          },
          {
            name: '西安',
            value: 90
          },
          {
            name: '广州',
            value: 90
          },
          {
            name: '大连',
            value: 80
          },
          {
            name: '南宁',
            value: 70
          },
          {
            name: '拉萨',
            value: 50
          },
          {
            name: '长春',
            value: 40
          },
          {
            name: '包头',
            value: 30
          },
          {
            name: '重庆',
            value: 20
          },
          {
            name: '常州',
            value: 10
          },
          {
            name: '成都',
            value: 400
          },
          {
            name: '海口',
            value: 30
          },
          {
            name: '沈阳',
            value: 110
          },
          {
            name: '保定',
            value: 120
          }
        ];
        cityData.sort((a,b) => b.value - a.value);
        this.cityData = cityData.slice(0, 8);
      },
      refreshChart() {
        this.chart.setOption(pieChart.init());
        this.chart.setOption(pieChart.refresh(this.cityData));
      },
      init() {
        this.getData();
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
    height: 200px;
    width: 100%;
  }

</style>
