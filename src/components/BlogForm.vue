<script setup>
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const editableBlogData = ref({

    title: '',
    body: '',
    imgUrl: '',




})

async function createBlog() {

    try {
        logger.log('CREATE THAT BLOG 📝')
        await blogsService.createBlog(editableBlogData.value)

        editableBlogData.value = {

            title: '',
            body: '',
            imgUrl: ''
        }

        //add createdatDate?...

    }

    catch (error) {
        Pop.error(error)
        logger.error('COULD NOT CREATE BLOG')

    }
}

</script>


<template>

    <!-- v-if account on blog form?     -->
    <h1 class="text-center"> Blog Form </h1>
    <form @submit.prevent="createBlog()" class="container-fluid">

        <div class="col-md-6">
            <label for="blog-title" class="form-label"> Blog Title </label>
            <input v-model="editableBlogData.title" id="blog-title" class="form-control" required type="text">


        </div>


        <div class="blog d-flex flex-column">
            <label for="blog-body" class="form-label"> Blog Body </label>
            <textarea class="my-2" placeholder="Write body here" v-model="editableBlogData.body" id="blog-body" required
                type="text"> </textarea>

        </div>




        <div class="col-md-6">
            <label for="blog-img-url" class="form-label"> Blog Picture </label>
            <input v-model="editableBlogData.imgUrl" id="blog-img-url" class="form-control" required type="url">

        </div>

        <button class="btn btn-primary my-2" type="submit"> Create blog!</button>



    </form>
</template>


<style lang="scss" scoped>
.blog {
    display: inline-block;
}
</style>