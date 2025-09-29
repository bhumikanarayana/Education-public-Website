<template>
    <div>
        <div class="w-full bg-[#F0FAF7] py-12 px-4">
            <!-- Loading State -->
            <div v-if="loading" class="flex justify-center items-center py-12">
                <div class="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                <span class="ml-3 text-emerald-600 font-medium">Loading images...</span>
            </div>

            <!-- Gallery -->
            <div v-else class="container">
                <div class="row">
                    <div class="col-md-4 mb-2" v-for="(col, index) in imageColumns" :key="index">
                        <img v-for="(img, i) in col" :key="i" :src="img" alt="Gallery Image" class="img-fluid mb-2" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            images: [],
            loading: true, // track loading state
        };
    },
    computed: {
        // Split into 3 columns with max 2 images each
        imageColumns() {
            const cols = [[], [], []];
            this.images.forEach((img, idx) => {
                if (idx < 6) {
                    cols[Math.floor(idx / 2)].push(img);
                }
            });
            return cols;
        },
    },
    mounted() {
        this.fetchGalleryImages();
    },
    methods: {
        async fetchGalleryImages() {
            try {
                const startTime = Date.now();
                const res = await axios.get(
                    "/api/method/education_app.api.galleryImages.get_gallery_images"
                );
                const data = res.data.message;
                this.images = Object.values(data).filter(Boolean);

                // Ensure loader shows for at least 2 seconds
                const elapsed = Date.now() - startTime;
                const remaining = 1000 - elapsed;
                setTimeout(() => {
                    this.loading = false;
                }, remaining > 0 ? remaining : 0);
            } catch (err) {
                console.error("Error fetching gallery images:", err);
                this.loading = false;
            }
        },
    },
};
</script>