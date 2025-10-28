<script setup>
import { Blog } from '@/models/Blog.js';

const props = defineProps({

    blog: { type: Blog, required: true }
})

</script>



<template>
    <div class="card" v-if="blog">
        <img :src=blog?.imgUrl :alt="`${blog.title}`" data-bs-toggle="modal" :data-bs-target="`#${blog.id}`">
        <div class="card-body">
            <p> {{ blog.title }}</p>
            <p> {{ blog.creator.name }}</p>
        </div>
    </div>

    <!-- Above: Didn't need a ? this time!  -->
    <!-- Definitely need more styling! Do I mimick the figma or do my own thing? Maybe include a modal again, especially for the body! -->

</template>


<style lang="scss" scoped></style>