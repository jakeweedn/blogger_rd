<script setup>
import { AppState } from '@/AppState.js';
import { Blog } from '@/models/Blog.js';
import { computed } from 'vue';


// const props = defineProps({

//     activeBlog: { type: Blog, required: true }
// })


const blog = computed(() => AppState.activeBlog)

</script>


<template>
    <div v-if="blog != null">
        <p> {{ blog.body }} </p>
        <p> {{ blog.creator.name }}</p>

        <div data-bs-dismiss="modal">
            <RouterLink :to="{ name: 'Profile Details', params: { profileId: blog.creatorId } }"
                title="Go to the profile page!">
                <button class="btn btn-primary"> See more info about {{ blog.creator.name }} </button>
            </RouterLink>
        </div>

    </div>
</template>


<style lang="scss" scoped></style>