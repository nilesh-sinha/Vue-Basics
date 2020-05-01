<template>
<div class="container is-fluid about-template">
  <div class="notification">
    <strong>Who Are We</strong>
  </div>
  <!-- <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur pharetra tincidunt. Sed pulvinar suscipit tellus, sed tincidunt orci vestibulum euismod. Curabitur suscipit tincidunt velit ac consequat. Aenean a nibh sed tellus porttitor ultrices ullamcorper et nisi. Nulla pulvinar magna nec leo tempus, sit amet fringilla neque aliquam. Fusce eleifend efficitur ullamcorper. Ut dapibus erat vehicula ornare lacinia. Praesent a mattis nisi, eu vulputate quam. Nulla id leo sagittis, interdum odio id, interdum elit. Suspendisse eget nunc orci. Ut finibus non nibh eu eleifend. Donec faucibus odio nisl, at posuere elit porta at. Fusce facilisis neque eu eros laoreet facilisis. Morbi commodo commodo nibh ac laoreet.
  </div> -->
  <div class="columns">
    <div class="column"></div>
    <div class="column">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur pharetra tincidunt. </div>
  </div>
  <div class="columns">
    <div class="column"></div>
    <div class="column">Sed pulvinar suscipit tellus, sed tincidunt orci vestibulum euismod. Curabitur suscipit tincidunt velit ac consequat.  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AboutUs',
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
.about-template{
  & .columns {
    min-height: 250px;
  }
  & .column {
    margin: 20px;
    box-shadow: 0px 0px 5px #9b9b9b;
    display: grid;
    align-items: center;
  }
}
</style>
