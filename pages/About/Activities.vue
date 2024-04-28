<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <h3 class="text-uppercase text-center" >Робототехника</h3>
             
                <v-carousel :show-arrows="false" height="40dvh"  cycle interval="2500">
                    <v-carousel-item v-for="item in 7" :src="`/robots/${item}.jpg`" cover></v-carousel-item>

                   
                </v-carousel>
              
            </v-col>
            <v-col cols="12" md="6">
                <h3 class="text-uppercase text-center">Спорт</h3>
                <v-carousel :show-arrows="false" height="40dvh"  cycle interval="2000" >
                    <v-carousel-item v-for="item in 7" :src="`/sport/${item}.jpg`" cover></v-carousel-item>

                   
                </v-carousel>
             
            </v-col>
            <v-col cols="12" md="6">
                <h3 class="text-uppercase text-center">Пенные вечеринки</h3>
             
                <v-carousel :show-arrows="false" height="40dvh"  cycle interval="3000"> 
                    <v-carousel-item v-for="item in 8" :src="`/foam/${item}.jpeg`" cover></v-carousel-item>

                  
                </v-carousel>
              
            </v-col>
            <v-col cols="12" md="6">
                <h3 class="text-uppercase text-center">Лазертаг</h3>
                <v-carousel :show-arrows="false" height="40dvh"  cycle interval="3600">
                    <v-carousel-item v-for="item in 8" :src="`/lazertag/${item}.jpeg`" cover></v-carousel-item>

                </v-carousel>
             
            </v-col>
            <v-col cols="12">
                <h3 class="text-uppercase text-center">Дискотеки</h3>
                <v-carousel :show-arrows="false" height="50dvh"  cycle interval="4000">
                    <v-carousel-item v-for="item in 8" :src="`/disco/${item}.jpeg`" cover></v-carousel-item>

                </v-carousel>◊
             
            </v-col>
        </v-row>
    </v-container>

</template>