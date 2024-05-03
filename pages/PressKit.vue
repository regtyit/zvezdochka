<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="12">
                <h2 class="text-center text-uppercase">
                    <BackButton />
                    <div class="blue-dot"></div> Для публикаций
                </h2>

            </v-col>
            <v-col cols="12" md="3" sm="4" class=" pa-8 h-100">
                <v-img src="/long_logo.png" aspect-ratio="2/3" cover class="rounded-lg">
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
                <a href="/long_logo.png" download style="color: black;"> <div class="text-center">Скачать</div></a>
            </v-col>
            <v-col cols="12" md="3" sm="4" class=" pa-16 pa-md-8">
                <v-img src="/big_logo.png" aspect-ratio="2/3" cover class="rounded-lg">
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
                <a href="/big_logo.png" download style="color: black;"> <div class="text-center">Скачать</div></a>
            </v-col>
        </v-row>
    </v-container>

</template>