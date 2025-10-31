<script setup>
import { AppState } from '@/AppState.js';
import { logger } from '@/utils/Logger.js';
import { computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { profilesService } from './ProfilesService.js';
import { Pop } from '@/utils/Pop.js';
import { blogsService } from '@/services/BlogsService.js';
import BlogsCard from '@/components/BlogCard.vue';
import ModalWrapper from '@/components/ModalWrapper.vue';
import BlogDetails from '@/components/BlogDetails.vue';


const profile = computed(() => AppState.activeProfile)
const blogs = computed(() => AppState.profileBlogs)
const route = useRoute()
const router = useRouter()


onMounted(() => {
    getProfile()
    getProfileProjects()


})

watch(route, () => {
    getProfile()
    getProfileProjects()


})

async function getProfile() {

    try {

        const profileId = route.params.profileId
        logger.log("getting the profile", profileId)
        await profilesService.getProfile(profileId)



    }

    catch (error) {
        Pop.error(error, "Could not get profile!")
        logger.error(error)
        router.push({ name: 'Home' })


    }
}

async function getProfileProjects() {

    try {
        const profileId = route.params.profileId
        await blogsService.getProjectsByProfileId(profileId)
    }

    catch (error) {
        Pop.error(error, "Could not get profile blogs!");
        logger.error(error)


    }
}

</script>


<template>
    <section class="container">
        <div v-if="profile">
            <div class="col-md-6">
                <div class="d-flex flex-row align-items-center justify-content-center my-2">

                    <div>
                        <img class="img-fluid user-picture my-5" :src="profile.picture"
                            :alt="`${profile.name}'s picture'`">
                    </div>

                    <h1 class="mx-5"> {{ profile.name }}</h1>
                </div>
            </div>

            <!-- <img class="profile-img" :src="profile.picture" :alt="`image of ${profile.name}`"> -->









            <!-- <h2 class="text-center">Blogs by {{ profile.name }}</h2> -->
            <div class="container">
                <section class="row">

                    <div v-for="blog in blogs" :key="blog.id" class="g-5">

                        <BlogsCard :blog="blog" />

                    </div>


                    <ModalWrapper modalId="active-blog-modal" modalTitle="Active Blog Modal">

                        <BlogDetails />


                    </ModalWrapper>
                </section>
            </div>
        </div>

    </section>
</template>


<style lang="scss" scoped>
.user-picture {

    height: 150px;
}
</style>