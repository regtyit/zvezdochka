<script setup>
let passes = ref([
    {
        time: '01.06.2024 - 15.06.2024',
        name: 'Первая смена',
        price: '28000 рублей',
        color: 'secondary',

    },
    {
        time: '18.06.2024 - 02.07.2024',
        name: 'Вторая смена',
        price: '28000 рублей',
        color: 'success',

    },
    {
        time: '05.07.2024 - 19.07.2024',
        name: 'Третья смена',
        price: '28000 рублей',
        color: 'alert',

    },
    {
        time: '22.07.2024 - 05.08.2024',
        name: 'Четвертая смена',
        price: '28000 рублей',
        color: 'secondary',

    },
    {
        time: '08.08.2024 - 22.08.2024',
        name: 'Пятая смена',
        price: '28000 рублей',
        color: 'success',

    },
])
</script>
<template>

    <v-container>
        <ClientOnly>
            <v-row>
                <v-col>
                    <h2 class="text-center text-uppercase">
                        <BackButton />
                        <div class="blue-dot"></div> Путевки
                    </h2>

                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-timeline align="center">
                        <v-timeline-item v-for="(pass, i) in passes" :key="i" :dot-color="pass.color" size="small">
                            <template v-slot:opposite>
                                <h3 :class="`text-center font-weight-bold text-${pass.color}`" v-text="pass.time">
                                </h3>
                            </template>
                            <div>
                                <h2 :class="`text-center  font-weight-bold mb-4 text-${pass.color}`">
                                    {{ pass.name }}
                                </h2>
                                <h2 :class="`text-center  font-weight-bold mb-4 text-${pass.color}`">
                                    {{ pass.price }}
                                </h2>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
                <v-col cols="12" md="6" class="d-flex justify-center align-center order-first order-md-1">
                    <v-btn color="alert" to="/feedbackpage" >Купить путевку</v-btn>
                </v-col>
            </v-row>
        </ClientOnly>
    </v-container>


</template>