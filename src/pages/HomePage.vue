<script setup>
import { AppState } from '@/AppState.js';
import BlogDetails from '@/components/BlogDetails.vue';

import Example from '@/components/Example.vue';
import ModalWrapper from '@/components/ModalWrapper.vue';
import { Blog } from '@/models/Blog.js';
import { blogsService } from '@/services/BlogsService.js';

import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { Modal } from 'bootstrap';
import { computed, onMounted } from 'vue';
import BlogCard from '@/components/BlogCard.vue';

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
  <main class="container">
    <!-- <Example /> -->
    <h1 class="text-center cedarville-cursive-regular ">Blogger</h1>

    <!-- <div v-for="blog in blogs" :key="blog.id">
  </div> -->

    <!-- {{ blog.title }} -->

    <!-- Commented out above, don't want two v-fors for the props, aboce just for testing -->

    <section class="row">

      <div v-for="blog in blogs" :key="blog.id" class="my-2">

        <BlogCard :blog="blog" />


        <!-- <ModalWrapper :modalId=blog.id :modalTitle="blog.title" :blog="blog">

        <BlogDetails :blog="blog" />

      </ModalWrapper> -->

        <!-- Great, the above seems to work. Can I do it the active way? Yes, active way is preferable!  -->

      </div>


      <ModalWrapper modalId="active-blog-modal" modalTitle="Active Blog Modal">

        <BlogDetails />


      </ModalWrapper>




    </section>



  </main>
</template>

<style scoped lang="scss">
main {

  background-color: pink;
}

.cedarville-cursive-regular {
  font-family: "Cedarville Cursive", cursive;
  font-weight: 400;
  font-style: normal;
}


@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Noto+Serif+JP:wght@200..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
</style>
