<script setup>
import { useDisplay } from 'vuetify'
import logo from '~/public/long_logo.png'
const { mdAndDown } = useDisplay()
let drawer = ref(false)
useHead({
    link: [
        { rel: 'preload', as: 'image', href: logo },
    ]
})
</script>

<template>

    <ClientOnly>
        <v-app-bar elevation="0" color="white">

            <v-container>
                <v-row>
                    <v-col class="d-flex align-center justify-space-between">

                        <div>
                            <NuxtLink to="/">
                                <v-img cover :src="logo" width="160">
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
                            </NuxtLink>

                        </div>
                        <div v-if="!mdAndDown" class="d-flex justify-center w-100 font-weight-bold">

                            <div class="ma-2" on-touchcancel="">
                                <NuxtLink to="/about/description">О лагере</NuxtLink>
                            </div>
                            <div class="ma-2">
                                <NuxtLink to="/pass">Путевки</NuxtLink>
                            </div>
                            <div class="ma-2">
                                <NuxtLink to="/news">Новости</NuxtLink>
                            </div>
                            <div class="ma-2">
                                <NuxtLink to="/toparents/takewith">Родителям</NuxtLink>
                            </div>
                            <div class="ma-2">
                                <NuxtLink to="/additionalservice">Доп. услуги</NuxtLink>
                            </div>
                            <div class="ma-2">
                                <NuxtLink to="/job">Работа</NuxtLink>
                            </div>



                        </div>

                        <v-app-bar-nav-icon v-if="mdAndDown" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>


                    </v-col>
                </v-row>
            </v-container>



        </v-app-bar>
        <v-navigation-drawer v-model="drawer" temporary class="w-100" location="right">
            <div class="d-flex flex-column align-center text-uppercase pa-4 font-weight-bold">
                <div class="ma-2">
                    <NuxtLink to="/about/description">О лагере</NuxtLink>
                </div>
                <div class="ma-2">
                    <NuxtLink to="/pass">Путевки</NuxtLink>
                </div>
                <div class="ma-2">
                    <NuxtLink to="/news">Новости</NuxtLink>
                </div>
                <div class="ma-2">
                    <NuxtLink to="/toparents/takewith">Родителям</NuxtLink>
                </div>
                <div class="ma-2">
                    <NuxtLink to="/additionalservice">Доп. услуги</NuxtLink>
                </div>
                <div class="ma-2">
                    <NuxtLink to="/job">Работа</NuxtLink>
                </div>
                <div class="ma-2">
                    <NuxtLink to="/contacts">Контакты</NuxtLink>
                </div>


                <div style="width: 20%;" class="ma-4">
                    <v-img src="../assets/images/big_logo.png">
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
                </div>
                <div> <a href="tel:+7 (912) 856-55-69"> <span class="mdi mdi-cellphone-sound"></span> 7(912)856 55 69
                    </a>
                    <br>
                </div>
            </div>

        </v-navigation-drawer>
    </ClientOnly>
</template>
<style scoped>
a {
    color: black
}
</style>
