<template>
  <div class="min-h-screen bg-gray-100 text-gray-800 font-sans ">
    <Navbar /> <!-- Always visible -->

    <main class="pt-[150px]">
      <router-view /> <!-- Page changes here -->
    </main>

    <Footer /> <!-- Always visible -->
  </div>
</template>

<script>
import Navbar from '@/pages/Navbar.vue'
import Footer from '@/pages/Footer.vue'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
/* Global styles can be added here if needed */
* {
  font-family: "Roboto", sans-serif;
}
</style>
