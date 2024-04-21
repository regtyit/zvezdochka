<script setup>
import logo from '~/public/long_logo.png?url'

useHead({
  link: [
    { rel: 'preload', as: 'image', href: logo },
  ]
})
</script>

<template>
    <v-app-bar elevation="0" color="#faebd7">
        <v-container>
            <v-row>
                <v-col>
                    <div class="d-flex align-center justify-space-between">
                        <div>
                            <NuxtLink to="/">
                                <v-img cover :src="logo" width="180">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate></v-progress-circular>
                                        </v-row>
                                    </template>
                                    <template v-slot:error>
                                        <v-row class="fill-height ma-0" align="center"  justify="center">
                                            <span>Ошибка загрузки изображения</span>
                                        </v-row>
                                    </template>
                                </v-img>
                            </NuxtLink>

                        </div>
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    </div>

                </v-col>
            </v-row>
        </v-container>



    </v-app-bar>

</template>
