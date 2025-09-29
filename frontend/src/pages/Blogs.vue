<template>
    <div class="container bg-gray-100 py-10 px-5">

        <!-- Loading State -->
        <div v-if="isLoading" class="text-center py-20 text-gray-500 text-lg">
            Loading blogs...
        </div>

        <!-- Blogs Grid -->
        <div v-else class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="(blog) in blogs" :key="blog.name"
                class="bg-white shadow-md rounded-lg p-3 text-center cursor-pointer hover:shadow-lg transition"
                @click="goToBlogDetails(blog.name)">
                <!-- Thumbnail Image -->
                <img v-if="blog.thumbnail_img" :src="blog.thumbnail_img" alt="Thumbnail"
                    class="mx-auto mb-4 object-contain" />

                <!-- Blog Title -->
                <h2 class="font-semibold text-left text-lg mb-2">{{ blog.description_heading_1 }}</h2>

                <!-- Blog Preview (first 50 chars) -->
                <p class="text-left text-sm">{{ blog.description_1.substring(0, 50) }}...</p>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import { useRouter } from 'vue-router'

const stripHtml = (html) => {
    const tmp = document.createElement("DIV")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
}

export default {
    name: 'Blogs',
    data() {
        return {
            blogs: [],
            isLoading: true
        }
    },

    setup() {
        const router = useRouter()
        const goToBlogDetails = (blogName) => {
            router.push({ name: 'BlogDetails', query: { name: blogName } })
        }
        return { goToBlogDetails }
    },

    mounted() {
        this.fetchBlogs()
    },

    methods: {
        async fetchBlogs() {
            try {
                const res = await axios.get('/api/method/education_app.api.education_blog.get_blogs')

                // Simulate 1 second loading delay
                setTimeout(() => {
                    this.blogs = res.data.message.map(blog => ({
                        name: blog.name,
                        thumbnail_img: blog.thumbnail_image,
                        description_heading_1: blog.description_heading_1,
                        description_1: stripHtml(blog.description_1).substring(0, 100)
                    }))
                    this.isLoading = false
                }, 1000)
            } catch (err) {
                console.error('Error fetching blogs:', err)
                this.isLoading = false
            }
        }
    }
}
</script>

<style scoped>
.cursor-pointer:hover {
    transform: translateY(-2px);
}
</style>
