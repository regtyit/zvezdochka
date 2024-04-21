<script setup>

let toggle_menu = ref(
    [
        {
            name: 'Про лагерь',
            route: '/about/description'
        },
        {
            name: 'Чем заняться?',
            route: '/about/activities'
        },
        {
            name: 'Фотографии',
            route: '/about/photos'
        },
        {
            name: 'Как найти?',
            route: '/about/map'
        }
    ]
)




</script>
<template>
   
        <div>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <BackButton />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="pa-0 ">
                       <h2 class="text-center">  <div class="blue-dot"></div> О звёздочке</h2>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-center flex-wrap">
                        <v-btn variant="text" class="ma-1" v-for="menuItem, index in toggle_menu" :to="menuItem.route"
                             >{{ menuItem.name }} </v-btn>
                    </v-col>
                </v-row>
            </v-container>
            <NuxtPage />
        </div>
   
</template>