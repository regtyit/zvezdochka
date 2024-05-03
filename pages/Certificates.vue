<script setup>


let dialog = ref(false)
let selectedImg = ref(null)
let photos = ref(
    [{
        url: '/certificates/1.jpg'
    },
    {
        url: '/certificates/2.jpg'
    },
    {
        url: '/certificates/3.jpg'
    },
    {
        url: '/certificates/4.jpg'
    },
    {
        url: '/certificates/5.jpg'
    },
    {
        url: '/certificates/6.jpg'
    },

    ]
)
let activeIndex = (index) => {
    selectedImg.value = index
    dialog.value = true

}



</script>
<template>
    <v-container>
      
            <v-row> 
                <v-col cols="12">
                    <h2 class="text-center text-uppercase">
                        <BackButton />
                        <div class="blue-dot"></div> Документы
                    </h2>

                </v-col>
                <v-col cols="12" md="2" sm="4" v-for="photo, index in photos" :key="index"
                    class="d-flex child-flex pa-1" @click="activeIndex(index)">
                    <v-img :src="photo.url" aspect-ratio="2/3" cover class="rounded-lg">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate></v-progress-circular>
                            </v-row>
                        </template>
                        <template v-slot:error>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <span>Ошибка загрузки изображения</span>
                            </v-row>
                        </template>
                    </v-img>
                </v-col> 
            
            </v-row>

            <v-dialog v-model="dialog" height="90dvh">
              
                    <v-img :src="photos[selectedImg].url" aspect-ratio="2/3"  class="rounded-lg" @click="dialog = false">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate></v-progress-circular>
                            </v-row>
                        </template>
                        <template v-slot:error>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <span>Ошибка загрузки изображения</span>
                            </v-row>
                        </template>
                    </v-img>
            
           
            </v-dialog>
      
    </v-container>
</template>