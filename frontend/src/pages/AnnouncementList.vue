<template>
    <div>
        <div class="container bg-gray-100 py-10 px-5">
            <div class="bg-white shadow-md rounded-lg p-3 w-full text-center">

                <!-- Loading Screen -->
                <div v-if="isLoading" class="flex justify-center items-center py-10">
                    <span class="text-gray-600 text-lg animate-pulse">Loading Announcements...</span>
                </div>

                <!-- Dynamic Announcements -->
                <div v-else v-for="(announcement, index) in announcements" :key="index"
                    class="font-semibold text-left text-lg mb-2 flex justify-between w-100">
                    <div>
                        <div class="mb-2">
                            {{ announcement.announcement_title }}
                        </div>
                        <div class="text-gray-600 font-normal">
                            {{ announcement.announcement_contant }}
                        </div>
                    </div>
                    <div class="text-gray-600 font-normal">
                        {{ formatDate(announcement.announcement_created_date) }}
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
            announcements: [],
            isLoading: true, // track loading state
        };
    },
    mounted() {
        this.fetchAnnouncements();
    },
    methods: {
        async fetchAnnouncements() {
            this.isLoading = true;
            try {
                const res = await axios.get(
                    "/api/method/education_app.api.education_announcement.get_announcements"
                );
                // simulate 1 second loading
                setTimeout(() => {
                    this.announcements = res.data.message;
                    this.isLoading = false;
                }, 1000);
            } catch (err) {
                console.error("Error fetching announcements:", err);
                this.isLoading = false;
            }
        },
        formatDate(dateStr) {
            const date = new Date(dateStr);
            return date.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            });
        },
    },
};
</script>
