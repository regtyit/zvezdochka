<script setup>

import { useDisplay } from 'vuetify'
const { mdAndDown } = useDisplay()

let smallScreen = ref(true)
let selected = ref(null)
let scale = (index) => {
    if (selected.value == index) {
        selected.value = null
        return
    }
    selected.value = index
}
let activeImg = (index) => {
    if (!mdAndDown.value) {
        return selected.value == index ? 8 : 4;
    }
    if (mdAndDown.value) {
        return selected.value == index ? 12 : 6;
    }
}
let photos = ref(
    [{
        url: '/aria/1.jpg'
    },
    {
        url: '/aria/2.jpg'
    },
    {
        url: '/aria/3.jpg'
    },
    {
        url: '/aria/4.jpg'
    },
    {
        url: '/aria/5.jpg'
    },
    {
        url: '/aria/6.jpg'
    },
    {
        url: '/aria/7.jpg'
    },
    {
        url: '/aria/8.jpg'
    },
    {
        url: '/aria/9.jpg'
    },
    {
        url: '/aria/10.jpg'
    },
    {
        url: '/aria/11.jpg'
    },
    {
        url: '/aria/12.jpg'
    },
    {
        url: '/aria/13.jpg'
    },
    {
        url: '/aria/14.jpg'
    },
    {
        url: '/aria/15.jpg'
    },
    {
        url: '/aria/16.jpg'
    },




    ]
)



</script>
<template>
    <v-container>
        <v-row>
                <v-col v-for="photo, index in photos" :key="index" class="d-flex child-flex pa-1"
                    :cols="activeImg(index)" @click="scale(index)">
                    <v-img :src="photo.url" aspect-ratio="3/2" cover class="rounded-lg">
                    </v-img>
                </v-col>   
        </v-row>
    </v-container>
</template>