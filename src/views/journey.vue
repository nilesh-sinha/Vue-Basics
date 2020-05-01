<template>
<div class="columns" style="min-height: 90vh;">
  <div class="column container-borders">
    <div class="notification">
      Journey So Far
    </div>
    <section>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur pharetra tincidunt. Sed pulvinar suscipit tellus, sed tincidunt orci vestibulum euismod. Curabitur suscipit tincidunt velit ac consequat. Aenean a nibh sed tellus porttitor ultrices ullamcorper et nisi. Nulla pulvinar magna nec leo tempus, sit amet fringilla neque aliquam.
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: 'Journey',
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
<style scoped>
.container-borders {
  margin: 1.5rem;
  box-shadow: 0px 0px 5px #9b9b9b;
}
.red-phone {
    width: -webkit-fill-available;
    height: auto;
}
</style>
