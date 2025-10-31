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
    <!-- <div class="card"> -->
    <!-- v-if="blog" can add above if I need to -->

    <!-- <img class="img-fluid" @click="setActiveBlog()" :src=blog?.imgUrl :alt="`${blog.title}`" data-bs-toggle="modal"
            data-bs-target="#active-blog-modal"> -->

    <!-- The data-bs-target is the modalId! -->

    <!-- <div class="card-body">
            <p> {{ blog.createdAt.toLocaleDateString() }} </p>
            <h3 class="text-center"> {{ blog.title }}</h3>
            <p class="text-center"> By {{ blog.creator.name }}</p>

            <div data-bs-dismiss="modal">
                <RouterLink :to="{ name: 'Profile Details', params: { profileId: blog.creatorId } }"
                    title="Go to the profile page!">
                    <div class="text-center">
                        <img class="img-fluid user-picture" :src="blog.creator.picture" alt="`${blog.title}`">
                    </div>
                </RouterLink>
            </div>




        </div>
        <p class="text-center"> {{ blog.body.substring(0, 100) }}...</p>
        <div class="d-flex justify-content-end m-2">
            <button v-if="account?.id == blog.creatorId" @click="deleteBlog()" class="btn delete-button w-25 rounded-4">
                🗑</button>
        </div>



    </div> -->


    <!-- Card that looks like Figma: -->

    <section class="row bg-white my-2 border border-dark position-relative">
        <div class="col-md-6">

            <div data-bs-dismiss="modal" class="d-flex flex-row align-items-center my-2">
                <RouterLink :to="{ name: 'Profile Details', params: { profileId: blog.creatorId } }"
                    title="Go to the profile page!">
                    <div>
                        <img class="img-fluid user-picture m-2" :src="blog.creator.picture" alt="`${blog.title}`">
                    </div>
                </RouterLink>
                <p> {{ blog.creator.name }}</p>
            </div>
            <h4 class="fw-bold"> {{ blog.title }} </h4>
            <p> {{ blog.body.substring(0, 200) }}...</p>
            <p class="created-date"> {{ blog.createdAt.toLocaleDateString() }} </p>



        </div>

        <div class="col-md-6 d-flex justify-content-end">
            <img class="img-fluid blog-picture my-2" @click="setActiveBlog()" :src=blog?.imgUrl :alt="`${blog.title}`"
                data-bs-toggle="modal" data-bs-target="#active-blog-modal">

        </div>
    </section>





    <!-- Above: Didn't need a ? this time!  -->
    <!-- Definitely need more styling! Do I mimick the figma or do my own thing? Maybe include a modal again, especially for the body! -->

</template>


<style lang="scss" scoped>
.delete-button {

    background-color: #CF9FFF
}

.user-picture {
    max-width: 48px;
    max-height: 48px;


}

.blog-picture {

    height: 304px;
    max-height: 304px;

}

.created-date {

    position: absolute;
    bottom: 0px;
}

//position absolute needs a parent that's position relative</style>