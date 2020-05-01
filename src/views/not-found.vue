<template>
<div class="not-found">
      <img :src="getImageLink('404_peace.jpeg')">
</div>
</template>

<script>
export default {
  name: 'NotFound',
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
.not-found{
  width: 100%;
  transform: translateY(-52px);
  & image{
    widows: 100%;
    height: auto;
  }
}
</style>
