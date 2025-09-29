<template>
  <nav>
    <!-- Top Header -->
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
          <i class="fab fa-facebook text-1x"></i>
          <i class="fab fa-youtube text-1x"></i>
          <i class="fab fa-instagram text-1x"></i>
        </div>
      </div>
    </div>

    <!-- Main Navbar -->
    <div class="bg-slate-50 px-4 py-3 relative" ref="navbar">
      <div class="max-w-7xl mx-auto flex items-center justify-between">

        <!-- Logo -->
        <div class="text-black font-bold text-xl px-5">
          <img src="/logo.png" alt="Logo" class="w-18 h-16 md:w-25 md:h-20 md:pl-20 object-cover">
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex space-x-6 px-20">
          <router-link to="/" class="py-2 !text-black no-underline hover:!text-emerald-400"
            exact-active-class="!text-emerald-400 font-semibold">
            Home
          </router-link>
          <router-link to="/about" class="py-2 !text-black no-underline hover:!text-emerald-400"
            exact-active-class="!text-emerald-400 font-semibold">
            About
          </router-link>
          <router-link to="/AcademicsCourses" class="py-2 !text-black no-underline hover:!text-emerald-400"
            exact-active-class="!text-emerald-400 font-semibold">
            Academic
          </router-link>
          <router-link to="/Announcements" class="py-2 !text-black no-underline hover:!text-emerald-400"
            exact-active-class="!text-emerald-400 font-semibold">
            Announcements
          </router-link>
          <router-link to="/gallery" class="py-2 !text-black no-underline hover:!text-emerald-400"
            exact-active-class="!text-emerald-400 font-semibold">
            Gallery
          </router-link>
          <router-link to="/contact" class="py-2 !text-black no-underline hover:!text-emerald-400"
            exact-active-class="!text-emerald-400 font-semibold">
            Contact Us
          </router-link>
          <router-link to="/admission"
            class="bg-[#20b486] text-white px-2 py-2 rounded-md hover:!bg-emerald-600 transition no-underline"
            exact-active-class="!bg-emerald-600">
            For New Admission
          </router-link>
        </div>

        <!-- Mobile Menu Button (Hamburger) -->
        <div class="md:hidden ml-auto">
          <button @click="toggleMenu" class="text-black focus:outline-none">
            <Bars3Icon class="h-6 w-6 text-black" />
          </button>
        </div>

      </div>

      <!-- Mobile Nav -->
      <div ref="mobileMenu" :class="{ 'max-h-96 opacity-100 py-3': isOpen, 'max-h-0 opacity-0 py-0': !isOpen }"
        class="md:hidden flex flex-col space-y-2 mt-0 overflow-hidden transition-all duration-300 ease-in-out bg-slate-50 px-4 absolute top-full left-0 w-full z-50">
        <router-link @click="closeMenu" to="/" class="!text-black no-underline hover:!text-emerald-400"
          exact-active-class="!text-emerald-400 font-semibold">Home</router-link>
        <router-link @click="closeMenu" to="/about" class="!text-black no-underline hover:!text-emerald-400"
          exact-active-class="!text-emerald-400 font-semibold">About</router-link>
        <router-link @click="closeMenu" to="/AcademicsCourses" class="!text-black no-underline hover:!text-emerald-400"
          exact-active-class="!text-emerald-400 font-semibold">Academic</router-link>
        <router-link @click="closeMenu" to="/admission" class="!text-black no-underline hover:!text-emerald-400"
          exact-active-class="!text-emerald-400 font-semibold">Admission</router-link>
        <router-link @click="closeMenu" to="/Announcements" class="!text-black no-underline hover:!text-emerald-400"
          exact-active-class="!text-emerald-400 font-semibold">Announcements</router-link>
        <router-link @click="closeMenu" to="/gallery" class="!text-black no-underline hover:!text-emerald-400"
          exact-active-class="!text-emerald-400 font-semibold">Gallery</router-link>
        <router-link @click="closeMenu" to="/contact" class="!text-black no-underline hover:!text-emerald-400"
          exact-active-class="!text-emerald-400 font-semibold">Contact Us</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { PhoneIcon, EnvelopeIcon, Bars3Icon } from '@heroicons/vue/24/solid'

export default {
  name: "Navbar",
  components: { PhoneIcon, EnvelopeIcon, Bars3Icon },
  data() {
    return { isOpen: false };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    handleClickOutside(event) {
      if (this.isOpen && !this.$refs.navbar.contains(event.target)) {
        this.isOpen = false;
      }
    }
  }
}
</script>