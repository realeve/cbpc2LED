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
        commentData: []
      }
    },
    components: {

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
        this.commentData = [{
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
      },
      refreshMap() {
        this.getData();
        this.chart.setOption(mapChart.init());

        // let opData = [];
        // this.commentData.forEach(item=>{
        //   let maxI = Math.ceil(item.value/2);
        //   for(let i=0;i<maxI;i++){
        //     opData.push({
        //       name:item.name,
        //       value:2
        //     });
        //   }
        // });
        setTimeout(() => {
          this.chart.setOption(mapChart.refresh(this.commentData));
        }, 1000);
      },
      refreshChart() {
        this.refreshMap();
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
    height: 700px;
  }
</style>
