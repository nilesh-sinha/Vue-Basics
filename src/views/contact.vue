<template>
<div class="columns" style="min-height: 85%;">
  <div class="column container-borders">
    <img class="red-phone" :src="bg_image" alt="">
  </div>
  <div class="column container-borders">
    <section>
        <h4><strong>Contact Us</strong></h4>
        <h6>We would love to hear from you.</h6>
        <br/>
        <b-field horizontal label="From">
            <b-input name="name" placeholder="Name" expanded></b-input>
            <b-input name="email" type="email"  placeholder="nobody@nowhere.com" expanded required></b-input>
        </b-field>

        <b-field horizontal label="Message">
            <b-input type="textarea"></b-input>
        </b-field>

        <b-field horizontal><!-- Label left empty for spacing -->
            <p class="control">
                <button class="button is-primary">
                  Send
                </button>
            </p>
        </b-field>
    </section>
    <br><br>
    <section>
      <h6><strong>Or reach out to us on the below provided numbers:</strong></h6>
      <h6>(Monday - Saturday) 09:00 AM - 06:00 PM</h6>
      <br>
      <div style="text-align: left;">
        <ul>
          <li>+91-XXX-XXXXXXX</li>
          <li>+91-XXX-1234567</li>
        </ul>
      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
      bg_image: 'https://res.cloudinary.com/nd10/image/upload/v1588420841/hlw-wrld/contact_phone_yjlwyt.png'
      }
  }, 
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
