<script setup>
import { Blog } from '@/models/Blog.js';

const props = defineProps({

    blog: { type: Blog, required: true }
})

</script>



<template>
    <p> hello </p>
    <p> {{ blog.title }}</p>

</template>


<style lang="scss" scoped></style>