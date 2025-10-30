<script setup>
import { AppState } from '@/AppState.js';
import { Account } from '@/models/Account.js';
import { Blog } from '@/models/Blog.js';
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { Modal } from 'bootstrap';
import { computed } from 'vue';


const account = computed(() => AppState.account)
const props = defineProps({

    blog: { type: Blog, required: true }
})


function setActiveBlog() {
    blogsService.setActiveBlog(props.blog)


}

async function deleteBlog() {
    const confirmed = await Pop.confirm(`Are you sure you want to delete ${props.blog.title}?`)

    if (!confirmed) {
        return
    }

    try {
        logger.log('Delete that blog')
        await blogsService.deleteBlog(props.blog.id)
        Pop.success('Your blog was successfully deleted!')


    }
    catch (error) {
        Pop.error(error)
        logger.error('COULD NOT DELETE BLOG')


    }

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
        <button v-if="account?.id == blog.creatorId" @click="deleteBlog()" class="btn btn-warning"> Delete Blog
            🗑</button>
    </div>

    <!-- Above: Didn't need a ? this time!  -->
    <!-- Definitely need more styling! Do I mimick the figma or do my own thing? Maybe include a modal again, especially for the body! -->

</template>


<style lang="scss" scoped></style>