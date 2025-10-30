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
    <!-- <div v-if="blog != null">
        <h1 class="text-center"> {{ blog.title }} </h1>
        <h4 class="text-center"> By {{ blog.creator.name }} </h4>
        <div data-bs-dismiss="modal">
            <RouterLink :to="{ name: 'Profile Details', params: { profileId: blog.creatorId } }"
                title="Go to the profile page!">
                <div class="text-center">
                    <img class="img-fluid user-picture" :src="blog.creator.picture" alt="`${blog.title}`">
                </div>
            </RouterLink>
        </div>
        <p class="text-center m-3"> {{ blog.body }} </p>


        <div data-bs-dismiss="modal">
            <RouterLink :to="{ name: 'Profile Details', params: { profileId: blog.creatorId } }"
                title="Go to the profile page!">
                <div class="text-center">
                    <button v-if="route.name !== 'Profile Details'" class="btn more-info-button rounded-4 my-3"> {{
                        blog.creator.name }} blogs</button>
                </div>
            </RouterLink>
        </div>

    </div> -->

    <!-- Mimicking Figma -->

    <div v-if="blog != null" class="border border-dark border-3">

        <section class="container">
            <div class="text-center">
                <img class="img-fluid blog-picture my-2" :src=blog?.imgUrl :alt="`${blog.title}`" data-bs-toggle="modal"
                    data-bs-target="#active-blog-modal">
            </div>

            <div class="d-flex flex-row">
                <div data-bs-dismiss="modal">
                    <RouterLink :to="{ name: 'Profile Details', params: { profileId: blog.creatorId } }"
                        title="Go to the profile page!">


                        <img class="img-fluid user-picture m-3" :src="blog.creator.picture" alt="`${blog.title}`">


                    </RouterLink>
                </div>
                <div>
                    <h1 class="m-3">{{ blog.title }} </h1>
                    <p class="m-3"> By {{ blog.creator.name }}</p>
                    <p class="m-3"> Last created: {{ blog.createdAt.toLocaleDateString() }}</p>
                </div>
            </div>

            <p class="m-2"> {{ blog.body }} </p>

            <div data-bs-dismiss="modal">
                <RouterLink :to="{ name: 'Profile Details', params: { profileId: blog.creatorId } }"
                    title="Go to the profile page!">
                    <div class="text-center">
                        <button v-if="route.name !== 'Profile Details'" class="btn more-info-button rounded-4 my-3"> {{
                            blog.creator.name }} blogs</button>
                    </div>
                </RouterLink>
            </div>


        </section>
    </div>
</template>


<style lang="scss" scoped>
.more-info-button {

    background-color: #CF9FFF;
}

.user-picture {
    max-width: 180px;
    max-height: 180px;
}
</style>