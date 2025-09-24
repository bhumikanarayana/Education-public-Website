<template>
  <nav class="">
    <div class="nav-header py-2 px-5" style="background-color: #20B486;color: #ffffff;">
      <div class="grid grid-cols-3 gap-8">
        <div class="flex items-center justify-center space-x-2">
          <PhoneIcon class="w-5 h-4" />
          <span class="text-sm md:text-lg">+91 9876543567</span>
        </div>
        <div class="flex items-center justify-center space-x-2">
          <EnvelopeIcon class="w-5 h-5" />
          <span class="text-sm md:text-xl">info@example.com</span>
        </div>
        <div class="flex items-center justify-center space-x-4">
          <i class="fab fa-facebook text-1x"></i> <!-- Facebook brand -->
          <i class="fab fa-youtube text-1x"></i> <!-- YouTube brand -->
          <i class="fab fa-instagram text-1x"></i> <!-- Instagram brand -->
        </div>
      </div>
    </div>

    <nav class="bg-slate-50 px-4 py-3">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="text-black font-bold text-xl px-5">
          <img src="/logo.png" alt="Logo" class="w-18 h-16 md:w-25 md:h-20 md:pl-20 object-cover">
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex space-x-6 text-black px-20">
          <router-link to="/" class="hover:text-emerald-400 py-2">Home</router-link>
          <router-link to="/about" class="hover:text-emerald-400 py-2">About</router-link>
          <router-link to="/AcademicsCourses" class="hover:text-emerald-400 py-2">Academic</router-link>
          <router-link to="/Announcements" class="hover:text-emerald-400 py-2">Announcements</router-link>
          <router-link to="/contact" class="hover:text-emerald-400 py-2">Contact Us</router-link>
          <router-link to="/admission"
            class="bg-[#20b486] text-white px-2 py-2 rounded-md hover:bg-emerald-600 transition">
            For New Admission
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-black focus:outline-none">
            <Bars3Icon class="h-6 w-6 text-black" />
          </button>
        </div>

        <!-- Mobile Nav -->
        <div v-if="isOpen" class="md:hidden flex flex-col space-y-2 mt-3 text-black">
          <router-link to="/" class="hover:text-emerald-400">Home</router-link>
          <router-link to="/about" class="hover:text-emerald-400">About</router-link>
          <router-link to="/AcademicsCourses" class="hover:text-emerald-400">Academic</router-link>
          <router-link to="/Announcements" class="hover:text-emerald-400">Announcements</router-link>
          <router-link to="/admission" class="hover:text-emerald-400">Admission</router-link>
          <router-link to="/contact" class="hover:text-emerald-400">Contact Us</router-link>
        </div>
      </div>

    </nav>
  </nav>
</template>

<script>
import { PhoneIcon, EnvelopeIcon, Bars3Icon } from '@heroicons/vue/24/solid'

export default {
  name: "Navbar",
  components: {
    PhoneIcon,
    EnvelopeIcon,
    Bars3Icon
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
}

</script>
