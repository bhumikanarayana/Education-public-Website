<template>
    <div class="bg-gray-100 py-10 px-5">

        <!-- Loading State -->
        <div v-if="isLoading" class="text-center py-20 text-gray-500 text-lg">
            Loading blog details...
        </div>

        <!-- Blog Details -->
        <div v-else-if="blog" class="max-w-6xl mx-auto mb-12">

            <!-- Header Image -->
            <img v-if="blog.header_image" :src="blog.header_image" alt="Blog Image"
                class="w-full h-96 object-cover rounded-lg mb-6" />

            <!-- Description Headings & Content -->
            <div v-for="n in 4" :key="n">
                <h2 class="text-2xl font-bold text-gray-800 mb-3">{{ blog[`description_heading_${n}`] }}</h2>
                <p class="text-gray-700 text-lg leading-relaxed" v-html="blog[`description_${n}`]"></p>
            </div>

            <!-- Custom HTML -->
            <div v-if="blog.custom_html" v-html="blog.custom_html"></div>
        </div>

        <!-- Fallback if no blog found -->
        <div v-else class="text-center text-gray-500">Exploring Blog</div>

    </div>
</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router'

export default {
    name: "BlogDetails",
    data() {
        return {
            blog: null,
            isLoading: true
        }
    },
    setup() {
        const route = useRoute()
        return { route }
    },
    mounted() {
        this.fetchBlogDetails()
    },
    methods: {
        async fetchBlogDetails() {
            const blogName = this.route.query.name
            if (!blogName) {
                this.isLoading = false
                return
            }

            try {
                const res = await axios.get('/api/method/education_app.api.education_blog.get_blog', {
                    params: { blog_name: blogName }
                })

                // Simulate 1 second loading delay
                setTimeout(() => {
                    this.blog = res.data.message
                    this.isLoading = false
                }, 1000)

            } catch (err) {
                console.error('Error fetching blog details:', err)
                this.isLoading = false
            }
        }
    }
}
</script>
