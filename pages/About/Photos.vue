<script setup>

import { useDisplay } from 'vuetify'
const { mdAndDown } = useDisplay()

let selected = ref(null)
let scale = (index) => {
    if (selected.value == index) {
        selected.value = null
        return
    }
    selected.value = index
}
let activeImg = (index) => {
  
        return selected.value == index ? 8 : 4;
 
}
</script>
<template>
    <v-container>
        <v-row>
            <v-col>
                <template>
                    <v-row>
                        
                        <v-col v-for="n, index in 9" :key="index" class="d-flex child-flex" :cols="activeImg(index)"
                            @click="scale(index)">
                            <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`" aspect-ratio="3/2"
                                class="bg-grey-lighten-2" cover>
                            </v-img>
                        </v-col>
                    </v-row>
                </template>
            </v-col>
        </v-row>
    </v-container>

</template>