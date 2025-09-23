<template>
<section class="bg-slate-50">
  <div class="max-w-7xl mx-auto px-6 sm:px-6 md:px-10 lg:px-20 py-5 flex flex-col md:flex-row items-center md:justify-between gap-y-8">
    
    <!-- Left Content -->
    <div class="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pl-12">
      <h1 class="font-bold mb-4 " style="font-size: 3rem; ">Build your <span style="color: #20B486;">skills</span><br>
        and <span style="color: #20B486;">Unlock</span> your <span style="color: #20B486;">True</span> potential
      </h1>
      <p class="text-gray-700 mb-6">
        Join [School/College Name], where modern education, expert faculty,
        and real-world learning experiences prepare you for a successful future.
      </p>
    </div>

    <!-- Right Image -->
    <div class="w-full md:w-1/2 flex justify-center md:justify-end">
      <img src="/newlogo.png" alt="Hero Image" class="w-full max-w-sm md:max-w-xl h-auto object-cover rounded-lg" />
    </div>

  </div>
</section>
<section class="bg-gray-100">
  <div class="max-w-7xl mx-auto px-6 sm:px-6 md:px-10 lg:px-20 py-5 flex flex-col md:flex-row items-center md:justify-between gap-y-8">
    
    <!-- Left Content -->
    <div class="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pl-12">
      <h1 class="font-bold mb-4 text-3xl">About Us</h1>
      <h3 class="font-bold mb-4">Great History Of Our College</h3>
      <p class="text-gray-700 mb-6">
        Sri chaitanya Junior College was founded in the year 1991. has since grown across geographies and is now present not only in Telangana, but also in Andhrapradesh & Karnataka.  provide quality education right from playgroup and kindergarten, all the way to undergraduate levels and groom students for competitive fields such as Medicine,Engineering,
        Chartered Accountancy, Law and Civil Services. 
      </p>
      <div class="">
      <button class="text-center rounded-lg p-2" style="background-color: #20B486; color:#ffffff;">Know more</button>
      </div>
    </div>

    <!-- Right Image -->
    <div class="w-full md:w-1/2 flex justify-center md:justify-end">
      <img src="/Image.png" alt="Hero Image" class="w-full max-w-sm md:max-w-md h-auto object-cover rounded-lg" />
    </div>

  </div>
</section>
<section class="py-12 lg:px-20 sm:py-8 sm:px-4 lg:py-12  bg-gray-100">
 <div class="max-w-7xl mx-auto px-8 sm:px-4 md:px-6 lg px-8">
  <h5 class="font-bold p-2" style="color: #20B486;">Explore Programs</h5>
  <h3 class="font-semibold px-2 py-1 text-3xl">Our Most Popular Class</h3>
  <h5 class="p-2 font-medium">Let's join our famous class, the knowledge provided will definitely be useful for you.</h5>
 <div class="relative w-full overflow-hidden">
    <!-- Carousel container -->
    <div
      class="flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }"
      ref="carousel"
    >
      <!-- Carousel cards -->
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex-shrink-0 w-full sm:w-1/3 p-2"
      >
        <div class="bg-white shadow-md rounded-lg p-4 text-center">
        <!-- Image -->
        <img
          :src="item.image"
          alt="Card Image"
          class="mx-auto mb-4 object-contain"
        />
          <h2 class="font-semibold text-left text-lg mb-2 flex justify-between items-center">{{ item.title }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
          <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
          </svg>
          </h2>
          <p class="text-left text-sm">{{ item.content }}</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-4 space-x-2">
  <span
    v-for="(dot, index) in totalDots"
    :key="'dot-'+index"
    @click="goTo(index)"
    :class="[
      'w-3 h-3 rounded-full cursor-pointer',
      currentIndex === index ? 'bg-[#20B486]' : 'bg-gray-400'
    ]"
  ></span>
</div> 
    <div class="text-center mt-4">
      <button class="rounded-lg p-2" style="background-color: #20B486; color:#ffffff;">Explore All Programs</button>
      </div>
</div>
</div>
</section>
<section class="bg-gray-100">
  <div class="max-w-7xl mx-auto px-6 sm:px-6 md:px-10 lg:px-20 py-5 flex flex-col md:flex-row items-center md:justify-between gap-y-8">
    
    <!-- Left Image -->
    <div class="w-full md:w-1/2 md:justify-start md:ml-8">
      <img src="/mission.png" alt="Hero Image" class="w-full max-w-sm md:max-w-md h-auto object-cover rounded-lg" />
    </div>
     <!-- Right Content -->
    <div class="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
      <h1 class="font-bold mb-2 text-3xl">About Us</h1>
      <h3 class="font-bold mb-3">Great History Of Our College</h3>
      <p class="text-gray-700 mb-3">
       To empower students with knowledge,skills, and values 
      to become confident, responsible, and successful individuals in a global society.provide high-quality education through innovative teaching,
      fostering holistic development, and nurturing a lifelong love for learning.</p>

    <p class="text-gray-700 mb-3">Our vision is to nurture curious minds, creative thinkers, and compassionate hearts. By cultivating a lifelong love for learning, we aim to equip students not only for 
    academic achievement but also for personal growth, social responsibility, and meaningful contribution to the world around them.
          </p>
    </div>

  </div>

</section>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {image: "/ai.png", title: "Aritificial Intelligence", content: "AI enables machines to simulate human intelligence and decision-making." },
        {image: "/ds.png", title: "Data Scientist", content: "Data Science extracts insights from raw data to drive smarter decisions." },
        {image: "/ml.png", title: "Machine Learning", content: "ML allows systems to learn from data and improve automatically." },
        {image: "/ai.png", title: "Aritificial Intelligence", content: "AI enables machines to simulate human intelligence and decision-making." },
        {image: "/ds.png", title: "Data Scientist", content: "Data Science extracts insights from raw data to drive smarter decisions." },
        {image: "/ml.png", title: "Machine Learning", content: "ML allows systems to learn from data and improve automatically." },
      ],
      currentIndex: 0,
      cardWidth: 0,
      visibleCards: 1,
    };
  },
  computed: {
    totalDots() {
      return 3;
    },
  },
  mounted() {
    this.updateCardWidth();
    window.addEventListener("resize", this.updateCardWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateCardWidth);
  },
  methods: {
    updateCardWidth() {
      const container = this.$refs.carousel;
      if (window.innerWidth >= 640) {
        this.visibleCards = 3;
      } else {
        this.visibleCards = 1;
      }
      this.cardWidth = container.offsetWidth / this.visibleCards;
    },
    next() {
      if (this.currentIndex < this.totalDots - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Loop back
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.totalDots - 1; // Loop to last
      }
    },
    goTo(index) {
      this.currentIndex = index;
    },
  },
};
</script>


<style>
/* Optional: hide scrollbar */
.carousel::-webkit-scrollbar {
  display: none;
}
</style>
