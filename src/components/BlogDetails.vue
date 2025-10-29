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
    <p v-if="blog != null"> {{ blog.body }} </p>

</template>


<style lang="scss" scoped></style>