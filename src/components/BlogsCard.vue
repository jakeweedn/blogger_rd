<script setup>
import { Blog } from '@/models/Blog.js';
import { blogsService } from '@/services/BlogsService.js';
import { Modal } from 'bootstrap';

const props = defineProps({

    blog: { type: Blog, required: true }
})


function setActiveBlog() {
    blogsService.setActiveBlog(props.blog)


}

</script>



<template>
    <div class="card">
        <!-- v-if="blog" can add above if I need to -->
        <img @click="setActiveBlog()" :src=blog?.imgUrl :alt="`${blog.title}`" data-bs-toggle="modal"
            data-bs-target="#active-blog-modal">
        <!-- The data-bs-target is the modalId! -->
        <div class="card-body">
            <p> {{ blog.title }}</p>
            <p> {{ blog.creator.name }}</p>
        </div>
    </div>

    <!-- Above: Didn't need a ? this time!  -->
    <!-- Definitely need more styling! Do I mimick the figma or do my own thing? Maybe include a modal again, especially for the body! -->

</template>


<style lang="scss" scoped></style>