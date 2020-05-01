<template>
<div class="">
<b-navbar fixed-top class="transparent-background">
        <template slot="brand">
            <b-navbar-item href="home">
                <div class="title">Hello World</div>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="about">
                About Us
            </b-navbar-item>
            <b-navbar-item href="courses">
               Our Courses
            </b-navbar-item>
            <b-navbar-item href="journey">
               Journey
            </b-navbar-item>
            <b-navbar-dropdown label="More To Discover">
                <b-navbar-item href="upcoming">
                    Aasan
                </b-navbar-item>
                <b-navbar-item href="upcoming">
                    Dance
                </b-navbar-item>
                <b-navbar-item href="upcoming">
                    Zumba
                </b-navbar-item>
                <b-navbar-item href="upcoming">
                    Blog
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <img class="margin-right15 yt" :src="getImageLink('youtube.png')" @click="goToYoutube" alt="Y">
                <img class="margin-right15 fb" :src="getImageLink('facebook.png')" @click="goToFacebook" alt="F">
            </b-navbar-item>
            <b-navbar-item class="margin-right15" href="contact">
               Contact Us
            </b-navbar-item>
        </template>
    </b-navbar>
    <!-- <Dashboard /> -->
</div>
</template>

<script>
// import Dashboard from './Dashboard';
export default {
  name: 'Header',
  props: {
    msg: String
  },
data(){
    return { }
},    
    methods: {
        getImageLink(assetName) {
            return  require('../assets/images/'+assetName);
        },
        goToYoutube() {
            window.open('https://www.youtube.com/', 'blank')
        },
        goToFacebook() {
            window.open('https://www.facebook.com/', 'blank')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fb {
    border-radius: 5px;
}
.yt{
    border-radius: 10px;
}
.transparent-background{
    background: rgb(255, 255, 255, 0.3) !important;
}
</style>
