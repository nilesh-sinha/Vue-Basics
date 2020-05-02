<template>
<div>
    <div class="courses-root">
    <video autoplay muted loop id="myVideo">
        <source :src="videoURl" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>
    <div class="layer-2 bounce">
        <router-link to="#course-list">
          Browse through our services.<i class="fa fa-arrow-down fa-2x"></i>
        </router-link>
    </div>
</div>
<div class="container layer-1">
        <h4><strong>"Yoga Chitta Vrithi Nirodha"</strong></h4><br/>
        <h5>Yoga is the way to prevent unwanted mental vibrations by uniting with the divine</h5>
</div>
<div class="course-list" id="course-list">
    <div class="container">
        Confused about where to start from? Just drop a note and we will reach out to you.
        <router-link type="button" :to="{name: 'Contact'}">Send Message</router-link>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Courses',
  data(){
    return {
      videoURl: 'https://res.cloudinary.com/nd10/video/upload/v1588420844/hlw-wrld/video_rvchyx.mp4',
        gallery: false
      }
  },    
  methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.courses-root {
    transform: translateY(-52px);
    width: -webkit-fill-available;
    & .layer-2{
        position: relative;
        transform: translateY(-200px);
        // -webkit-text-stroke: 1px #F8F8F8;
        text-shadow: 0px 2px 4px #f8f8f8;
    }
}
#myVideo{
    width: 100%;
    height: auto;
}
.quote-box{
    position: inherit;
    top: 50%;
    width: 100%;
    left: calc(50% - 200px);
}

.layer-1{
    background: rgba(255, 255, 255, 0.5);
    padding: 20px;
    border-radius: 5px;
    width: 390px;
    position: absolute;
    top: 200px;
    margin-left: calc(50% - 195px);
}
@media screen and (max-width: 560px) {
  .layer-1 {
    top: 72px;
  }
  .layer-2 {
      display: none;
  }
}
@media screen and (min-width: 561px) and (max-width: 720px) {
  .layer-1 {
    top: 100px;
  }
}

.arrow {
  text-align: center;
  margin: 8% 0;
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
.course-list{
    min-height: 100vh;
    padding-top: 62px;
}

</style>
