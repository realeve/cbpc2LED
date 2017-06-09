<template>
  <div>
    <v-line/>
    <v-line style="padding-top:50px;"/>
    <v-line style="padding-top:50px;"/>
    <v-line style="padding-top:50px;"/>
  </div>
</template>

<script>
  import VLine from './Center/Line.vue';
  import VMap from './Center/Map.vue';

  export default {
    components: {
      VLine,
      VMap
    },
    computed: {
      chart() {
        return {
          map: echarts.init(this.$refs.map),
          line: echarts.init(this.$refs.line)
        };
      }
    }
  }
</script>