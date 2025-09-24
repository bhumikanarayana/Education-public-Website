<template>
  <div>
    <section class="w-full bg-[#F0FAF7] py-12 px-4">
      <div class="max-w-4xl mx-auto flex flex-col items-center text-center">
        <!-- Logo -->
        <img src="/logo.png" alt="Logo" class="w-24 h-24 mb-6" />

        <!-- Testimonial -->
        <p class="text-lg md:text-xl text-gray-700 mb-6">
          <span class="font-semibold text-emerald-600">Courses</span> was fantastic!
          It is the Master platform for those looking to start a new career, or need a refresher.
        </p>

        <!-- User Info -->
        <div class="flex flex-col items-center">
          <h3 class="text-lg font-bold text-gray-800">Jacob Jones</h3>
          <p class="text-sm text-gray-600">Student, National University</p>
        </div>
      </div>
    </section>
    <section class="py-12 lg:px-20 sm:py-8 sm:px-4 lg:py-12  bg-gray-100">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <!-- Card -->
        <div v-for="(item, index) in items" :key="index" class="bg-white shadow-md rounded-lg p-4 text-center">
          <!-- Image -->
          <img :src="item.image" alt="Card Image" class="mx-auto mb-4 object-contain" />
          <!-- Title -->
          <h2 class="font-semibold text-left text-lg mb-2 flex justify-between items-center">
            {{ item.title }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                clip-rule="evenodd" />
            </svg>
          </h2>
          <!-- Content -->
          <p class="text-left text-sm">{{ item.content }}</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: "/ai.png",
          title: "Artificial Intelligence",
          content:
            "AI enables machines to simulate human intelligence and decision-making.",
        },
        {
          image: "/ds.png",
          title: "Data Scientist",
          content:
            "Data Science extracts insights from raw data to drive smarter decisions.",
        },
        {
          image: "/ml.png",
          title: "Machine Learning",
          content:
            "ML allows systems to learn from data and improve automatically.",
        },
        {
          image: "/ai.png",
          title: "Artificial Intelligence",
          content:
            "AI enables machines to simulate human intelligence and decision-making.",
        },
        {
          image: "/ds.png",
          title: "Data Scientist",
          content:
            "Data Science extracts insights from raw data to drive smarter decisions.",
        },
        {
          image: "/ml.png",
          title: "Machine Learning",
          content:
            "ML allows systems to learn from data and improve automatically.",
        },
      ],
    };
  },
};
</script>
