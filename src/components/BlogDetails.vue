<script setup>
import { Blog } from '@/models/Blog.js';


const props = defineProps({

    blog: { type: Blog, required: true }
})

</script>


<template>
    <p v-if="blog">{{ blog.body }} </p>

</template>


<style lang="scss" scoped></style>