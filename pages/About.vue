<script setup>
let toggle_menu = ref(
    0
)
</script>
<template>
    <v-container>
        <BackButton/>
        <v-row>
            <v-col cols="12" class="d-flex justify-center">
                <v-btn-toggle v-model="toggle_menu" color="success" rounded="5" class="d-flex flex-wrap">
                    <v-btn to="/about/description">
                        О Звёдочке
                    </v-btn>

                    <v-btn to="/about/photos">
                        Фотографии
                    </v-btn>

                    <v-btn to="/about/map">
                        Как найти?
                    </v-btn>
               


                </v-btn-toggle></v-col>
            <v-col>

                <NuxtPage />
            </v-col>
        </v-row>
    </v-container>

</template>