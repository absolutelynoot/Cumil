<template>
  <div class="d-lg-none">
    <Navbar />
    <div class="container">
      <Hero />
    </div>
    <div class="primary-color container-fluid text-center" id="what-is-cumil">
      <img src="./assets/cumil-desktop.gif" alt="What is cumil?" class="img-fluid d-none d-lg-inline" />
      <img src="./assets/cumil-mobile.gif" alt="What is cumil?" class="img-fluid d-inline d-lg-none" />
    </div>
    <div class="container-fluid text-center py-5" id="cumil-made">
      <h1 class="text-center mb-5">How Cumil is made?</h1>
    </div>
    <Carousel />

    <div class="primary-color py-5 text-white" id="meet-the-team">
      <div class="container text-center">
        <h1 class="py-5">Meet the team</h1>
        <MeetTheTeam />
      </div>
    </div>
    <ContactForm />
  </div>

  <div class="d-none d-lg-inline">
    <div class="container text-center">
      <h1>Please scan the QR code using your mobile device to access cumil</h1>
    </div>
  </div>
</template>

<script setup>

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import ContactForm from './components/ContactForm.vue'
import MeetTheTeam from './components/MeetTheTeam.vue'
import Carousel from './components/Carousel.vue'

</script>
