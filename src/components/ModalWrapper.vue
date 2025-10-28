<script setup>
import { Blog } from '@/models/Blog.js';


defineProps({
    modalId: { type: String, required: true },
    modalTitle: { type: String, default: "Dont forget your title!" },
    // blog: { type: Blog, required: true }
})

</script>


<template>
    <div class="modal fade" :id="modalId" tabIndex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <slot>

                </slot>

            </div>


        </div>



    </div>

</template>


<style lang="scss" scoped></style>