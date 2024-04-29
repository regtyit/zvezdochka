<script setup>
let toggle_menu = ref(
    0
)
</script>
<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h2 class="text-center text-uppercase">
                        <BackButton />
                        <div class="blue-dot"></div> Родителям
                    </h2>
                </v-col>
                <v-col cols="12" class="d-flex justify-center flex-wrap">


                    <v-btn class="ma-1" size="small" :ripple="false" variant="text" to="/toparents/takewith">
                        Взять с собой
                    </v-btn>

                    <v-btn class="ma-1" size="small" :ripple="false" variant="text" to="/toparents/forms">
                        Документы
                    </v-btn>
                    <v-btn class="ma-1" size="small" :ripple="false" variant="text" to="/toparents/requisites">
                        Реквизиты
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        <NuxtPage />
    </div>
</template>


<!--  
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
                    @click="setActive(index)" >{{ menuItem.name }} </v-btn>
            </v-col>
        </v-row>
    </v-container>
    <NuxtPage />
</div> -->