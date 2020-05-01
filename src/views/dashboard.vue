<template>
<div class="">
    <b-carousel class="fixed-top" :autoplay="true" :indicator="false" :overlay="gallery">
        <b-carousel-item v-for="(item, i) in carousels" :key="i">
            <a class="image ">
                <img :src="getImageLink(item.image)">
            </a>
        </b-carousel-item>
    </b-carousel>
  <section class="section">
    <div class="container">
      <h1 class="title">Section</h1>
      <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'Dashboard',
  data(){
    return {
        carousels: [
            { text: 'Slide 1', color: 'primary', image: 'meditating.jpeg' },
            { text: 'Slide 2', color: 'primary', image: 'backlit_beach_dawn_dusk.jpeg' },
            { text: 'Slide 3', color: 'primary', image: 'group_outdoor_yoga.jpeg' },
            { text: 'Slide 4', color: 'primary', image: 'morning_yoga_stretch.jpeg' },
            { text: 'Slide 5', color: 'primary', image: 'nature_orc.jpeg' },          
        ],
        gallery: false
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

.is-active .al img {
    border: 1px solid #fff;
    filter: grayscale(0%);
}
.al img {
    border: 1px solid transparent;
    filter: grayscale(100%);
    height: calc(100% - 50px);
    width: 100%;
}
.fixed-top {
    /* position: absolute;
    top: 0px; */
    transform: translateY(-52px);
}
</style>
