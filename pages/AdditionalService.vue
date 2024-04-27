<script setup>
import priceList from '../db/AdditionalService.json'

</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <BackButton />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <h2 class="text-center">
                    <div class="blue-dot"></div> Прайс-лист
                </h2>
                <h3 class="text-center">на декабрь - май 2024г, руб</h3>
            </v-col>
        </v-row>
        <v-card elevation="8" class="pa-8">
            <v-row justify="center" class="align-stretch">

                <v-col cols="12" md="6" v-for="(item, i) in priceList.service_list" :key="i" class="">

                    <div class="service">
                        <div class="service_title mr-4">{{ item.name }}</div>
                        <div class="service_price">{{ item.price }}</div>
                    </div>
                    <v-divider class="ma-1"></v-divider>

                </v-col>

            </v-row> </v-card>
    </v-container>
</template>
<style scoped>
.service {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    font-size: clamp(0.875rem, 0.65rem + 0.4vw, 1rem);
}
</style>