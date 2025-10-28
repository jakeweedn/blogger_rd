<script setup>
import { AppState } from '@/AppState.js';
import Example from '@/components/Example.vue';
import { blogsService } from '@/services/BlogsService.js';

import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const blogs = computed(() => AppState.blogs)

onMounted(() => {
  getBlogs()
}
)

async function getBlogs() {

  try {
    await blogsService.getBlogs()

  }
  catch (error) {
    Pop.error(error)
    logger.error(error)


  }
}


</script>

<template>
  <!-- <Example /> -->
  <h1 class="text-center">Blogger</h1>

  <div v-for="blog in blogs" :key="blog.id">

    {{ blog.title }}


  </div>

</template>

<style scoped lang="scss"></style>
