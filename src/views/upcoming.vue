<template>
<div class="coming-soon">
      <img :src="getImageLink('under_construction.jpeg')">
</div>
</template>

<script>
export default {
  name: 'Upcoming',
  data(){
    return {
      }
  },    
  methods: {
      getImageLink(assetName) {
          return  require('../assets/images/'+assetName);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.coming-soon{
  width: 100%;
  transform: translateY(-52px);
  & image{
    widows: 100%;
    height: 100%;
  }
}
</style>
