<script setup>

let toggle_menu = ref(
    [
        {
            name: 'О лагере',
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
                    <h2 class="text-center text-uppercase">
                        <BackButton/>
                        <div class="blue-dot"></div> О звёздочке
                    </h2>
                </v-col>
                <v-col cols="12" class="d-flex justify-center flex-wrap ma-0 pa-0">
                    <v-btn variant="text" size="small" class="ma-1" :ripple="false"
                        v-for="menuItem, index in toggle_menu" :to="menuItem.route">{{ menuItem.name }} </v-btn>
                </v-col>
            </v-row>
        </v-container>
        <NuxtPage />
    </div>

</template>