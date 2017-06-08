<template>
  <div>
    <full-image/>
    <div>
      <v-header/>
    </div>
  </div>
</template>

<script>
  import FullImage from './IFullImage/index'
  import VHeader from './Header';

  export default {
    components: {
      FullImage,
      VHeader
    }
  }

</script>