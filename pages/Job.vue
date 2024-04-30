<template>
    <v-container>

        <v-row>
            <v-col cols="12">
                <h2 class="text-center text-uppercase">
                    <BackButton />
                    <div class="blue-dot"></div> Работа
                </h2>

            </v-col>
            <v-col cols="12">

                <h4 class="text-center">Стань частью нашего лагеря "Звездочка"</h4>
                <p class="text-center">  Заполните анкету, чтобы мы могли пригласить вас на собеседование
                </p>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
                <JobForm />
            </v-col>

        </v-row>
    </v-container>

</template>