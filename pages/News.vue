<script setup>
import news from '../db/news.js'

</script>
<template>
    <v-container>

        <v-row>
            <v-col cols="12
            ">
                <h2 class="text-center text-uppercase">
                    <BackButton />
                    <div class="blue-dot"></div> Новости
                </h2>

            </v-col>
            <v-col cols="12" v-for="item, index in news" :key="index">
                <v-card class="pa-2 pa-md-4 pa-md-8 ma-1" elevation="8">
                    <v-row>
                        <v-col cols="12" sm="4"> <v-img :src="item.imgUrl">

                            </v-img></v-col>
                        <v-col cols="12" sm="8">
                            <h3 class="text-center">{{ item.title }}</h3>
                            <p v-html="item.text"></p>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>