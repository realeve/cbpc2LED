<template>
  <div>
    <div ref="map" class="chart">
    </div>
    <div ref="line" class="chart2">
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import chinaJson from './Map/china.json';
  import mapChart from './Map/mapOption.js';
  import lineChart from './Map/lineOption.js';

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
        return {
          map: echarts.init(this.$refs.map),
          line: echarts.init(this.$refs.line)
        };
      }
    },
    methods: {
      resizeChart() {
        this.chart.map.resize;
        this.chart.line.resize;
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
        this.chart.map.setOption(mapChart.init());
        
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
          this.chart.map.setOption(mapChart.refresh(this.commentData));
        }, 1000);
      },
      refreshLine() {
        let lastData = lineChart.refresh();
        this.chart.line.setOption(lineChart.init());  
        setInterval(() => {
          lastData = lineChart.refreshLine(lastData.series[0].data);
          this.chart.line.setOption(lastData);
        }, 500);
      },
      refreshChart() {
        this.refreshMap();
        this.refreshLine();
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
  .chart,
  .chart2 {
    width: 100%;
    height: 700px;
  }

  .chart2 {
    height: 150px;
    margin-top:-40px;
  }

</style>
