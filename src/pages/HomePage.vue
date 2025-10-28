<script setup>
import { AppState } from '@/AppState.js';
import BlogDetails from '@/components/BlogDetails.vue';
import BlogsPage from '@/components/BlogsPage.vue';
import Example from '@/components/Example.vue';
import ModalWrapper from '@/components/ModalWrapper.vue';
import { Blog } from '@/models/Blog.js';
import { blogsService } from '@/services/BlogsService.js';

import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { Modal } from 'bootstrap';
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

  <!-- <div v-for="blog in blogs" :key="blog.id">
  </div> -->

  <!-- {{ blog.title }} -->

  <!-- Commented out above, don't want two v-fors for the props, aboce just for testing -->

  <section class="row">

    <div v-for="blog in blogs" :key="blog.id" class="col-md-6">

      <BlogsPage :blog="blog" />


      <ModalWrapper :modalId=blog.id :modalTitle="blog.title" :blog="blog">

        <BlogDetails :blog="blog" />

      </ModalWrapper>

      <!-- Great, the above seems to work. Can I do it the active way? Yes, active way is preferable!  -->

    </div>




  </section>
  <!-- v-for for modal wrapper when modal wrapper wraps multiple components (one for each blog)?  -->



</template>

<style scoped lang="scss"></style>
