<template>
  <div>
    <v-map/>
    <v-line style="margin-top:-80px;"/>
  </div>
</template>

<script>
  import VLine from './Center/Line.vue';
  import VMap from './Center/Map.vue';

  export default {
    components: {
      VLine,
      VMap
    }
  }
</script>