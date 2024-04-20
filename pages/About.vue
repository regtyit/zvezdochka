<script setup>
let active = ref(0)
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
let setActive = (index) => {
    active.value = index
}
let isActive = (index)=>{
    if (index == active.value){
        return 'success'
    } else {
        return 'white'
    }
}


</script>
<template>
    <v-container>
        <BackButton />
        <v-row>
            <v-col cols="12" class="d-flex justify-center ">
                <h2>О звёздочке</h2>
            </v-col>
            <v-col cols="12" class="d-flex justify-center flex-wrap">

                <v-btn size="small" class="ma-1" v-for="menuItem, index in toggle_menu" :to="menuItem.route" @click="setActive(index)"
                    :color="isActive(index)">{{ menuItem.name }} </v-btn>

            </v-col>
            <v-col>

                <NuxtPage />
            </v-col>
        </v-row>
    </v-container>

</template>