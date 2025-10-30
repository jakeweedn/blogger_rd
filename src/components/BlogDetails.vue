<script setup>
import { AppState } from '@/AppState.js';
import { Blog } from '@/models/Blog.js';
import { computed } from 'vue';
import { useRoute } from 'vue-router';


// const props = defineProps({

//     activeBlog: { type: Blog, required: true }
// })


const blog = computed(() => AppState.activeBlog)

const route = useRoute()

</script>


<template>
    <div v-if="blog != null">
        <p class="text-center m-3"> {{ blog.body }} </p>


        <div data-bs-dismiss="modal">
            <RouterLink :to="{ name: 'Profile Details', params: { profileId: blog.creatorId } }"
                title="Go to the profile page!">
                <div class="text-center">
                    <button v-if="route.name !== 'Profile Details'" class="btn more-info-button rounded-4 my-3"> See
                        more
                        info
                        about {{
                            blog.creator.name }} </button>
                </div>
            </RouterLink>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.more-info-button {

    background-color: #CF9FFF;
}
</style>