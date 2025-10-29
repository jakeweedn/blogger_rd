<script setup>
import { AppState } from '@/AppState.js';
import { logger } from '@/utils/Logger.js';
import { computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const profile = computed(() => AppState.activeProfile)
const blogs = computed(() => AppState.profileBlogs)
const route = useRoute()
const router = useRouter()


onMounted(() => {


})

watch(route, () => {


})

async function getProfile() {

    // try {

    //     const profileId = route.params.profileId
    //     logger.log("getting the profile", profileId)



    // }

    // catch {


    // }
}

</script>


<template>
    <h1> Hello? </h1>

</template>


<style lang="scss" scoped></style>