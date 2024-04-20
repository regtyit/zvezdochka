<script setup>
let toggle_menu = ref(
    0
)
</script>
<template>
    <v-container>
        <BackButton />
        <v-row>
            <v-col cols="12" class="d-flex justify-center ">
                <h2>Родителям</h2>
            </v-col>
            <v-col cols="12" class="d-flex justify-center ">
               
                <v-btn-toggle v-model="toggle_menu" color="success" rounded="5" class="d-flex flex-wrap" >
                    <v-btn to="/toparents/takewith" class="pa-2">
                        Взять с собой
                    </v-btn>
                   
                    <v-btn to="/toparents/forms">
                        Документы
                    </v-btn>
                    <v-btn to="/toparents/requisites">
                        Реквизиты
                    </v-btn>


                </v-btn-toggle></v-col>
            <v-col>

                <NuxtPage />
            </v-col>
        </v-row>
    </v-container>

</template>