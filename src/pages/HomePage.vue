<script setup>
import { AppState } from '@/AppState.js';
import Example from '@/components/Example.vue';
import { projectsService } from '@/services/ProjectsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const projects = computed(() => AppState.projects)

onMounted(() => {
  getProjects()
}
)

async function getProjects() {

  try {
    await projectsService.getProjects()

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

  <div v-for="project in projects" :key="project.id"> {{ project.title }} </div>

</template>

<style scoped lang="scss"></style>
