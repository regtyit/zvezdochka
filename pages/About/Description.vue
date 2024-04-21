<script setup>
let slide = ref(null)

let infoCards = ref([
    {
        text: `Лагерь находится в <b> 12 км от г. Глазова</b>   рядом с
                        исторически-культурным парком на севере Удмуртии.`,
        color: "#f1dca7"
    },
    {
        text: ` В живописном  лесном массиве <b> на берегу реки Чепца </b>. Вокруг сосновый лес, луга, ягодные места.`,
        color: "#f1dca7"

    },
    {
        text: `Жилые благоустроенные <b> двухэтажные кирпичные корпуса </b> с удобствами на
                    этаже, лицензированный <b> медицинский кабинет, столовая </b>.`,
        color: "#f1dca7"

    },
    {
        text: `Детские <b> игровые площадки </b>, открытая танцевальная площадка,<b> летняя эстрада </b> с современным светозвуковым оформлением.`,
        color: "#f1dca7"

    },
    {
        text: `Комнаты кружков, <b> стадион </b>, теннисный корт,  спортивные площадки.`,
        color: "#f1dca7"

    },
    {
        text: `<h3> ... на 120 гектарах. </h3>`,
        color: "#f1dca7"

    },

])

</script>
<template>


    <v-container>

        <v-row>
         
            <v-col cols="12" md="8">
                <v-img class="rounded-lg" src="../../assets/images/about_photo.jpeg"></v-img>
                <!-- <div class="main-img"></div> -->
            </v-col>
            <v-col class="d-none d-md-block " cols="12" md="4">
                <div class=" d-flex justify-center" >
                    <v-img src="../../assets/images/big_logo.png"   max-height="400">

                    </v-img>
                </div>


                <!-- <div class="main-img"></div> -->
            </v-col>



        </v-row>

        <v-row>
            <v-col cols="12" sm="6" md="4" v-for="card, index in infoCards" :key="index">
                <v-card class="mx-auto pa-4 h-100 d-flex align-center" max-width="400" :color="card.color" hover>

                    <p v-html='card.text'>

                    </p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>



</template>
<style scoped lang="scss">
div{
    color: #f1dca7
}
</style>