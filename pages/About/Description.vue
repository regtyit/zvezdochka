<script setup>
let slide = ref(null)

let infoCards = ref([
    {
        text: `Лагерь находится в <b> 12 км от г. Глазова</b>   рядом с
                        исторически-культурным парком на севере Удмуртии.`,
        color: "secondary"
    },
    {
        text: ` В живописном  лесном массиве <b> на берегу реки Чепца </b>. Вокруг сосновый лес, луга, ягодные места.`,
        color: "success"

    },
    {
        text: `Жилые благоустроенные <b> двухэтажные кирпичные корпуса </b> с удобствами на
                    этаже, лицензированный <b> медицинский кабинет, столовая </b>.`,
        color: "white"

    },
    {
        text: `Детские <b> игровые площадки </b>, открытая танцевальная площадка,<b> летняя эстрада </b> с современным светозвуковым оформлением.`,
        color: "secondary"

    },
    {
        text: `Комнаты кружков, <b> стадион </b>, теннисный корт,  спортивные площадки.`,
        color: "success"

    },
    {
        text: `<h3> ... на 12 гектарах. </h3>`,
        color: "white"

    },

])
</script>
<template>


    <v-container>

        <v-row>

            <v-col cols="12" md="8">
                <v-card class=" d-flex justify-center  align-center h-100"  elevation="8" >
                <v-img class="rounded-md" elevation="8" src="../../public/aria/6.jpg" aspect-ratio="2.5" cover>
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
                </v-card>
                <!-- <div class="main-img"></div> -->
            </v-col>
            <v-col class="d-none d-md-block " cols="12" md="4">
                <v-card class=" d-flex justify-center  align-center h-100" color="secondary"  elevation="8" >

                    <v-img src="../../assets/images/big_logo.png" max-height="200" >
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
                </v-card>


                <!-- <div class="main-img"></div> -->
            </v-col>



        </v-row>

        <v-row>
            <v-col cols="12" sm="6" md="4" v-for="card, index in infoCards" :key="index">
                <v-card class="mx-auto pa-4 h-100 d-flex align-center" max-width="400" :color="card.color" elevation="8">

                    <p v-html='card.text'>

                    </p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>



</template>
<style scoped lang="scss">

</style>