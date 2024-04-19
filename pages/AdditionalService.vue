<script setup>
import priceList from '../db/AdditionalService.json'

</script>
<template>
    <v-container>
                <h1 class="text-center mb-4">Прайс-лист на обслуживание <br> декабрь - май 2024г.</h1>
        <v-row justify="center" align="center">
            <v-col cols="12" md="6" v-for="(item, i) in priceList.service_list" :key="i" class="py-2">
                <div class="service">
                    <div class="service_title">{{ item.name }}</div>
                    <div class="service_price">{{ item.price }}</div>
                </div>
                <v-divider class="ma-0"></v-divider>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
.service {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.service_title{
    margin-right: 8px;
    text-align: justify;
    font-size: clamp(0.875rem, 0.65rem + 0.4vw, 1rem);
}
.service_price{
    font-size: clamp(0.875rem, 0.65rem + 0.4vw, 1rem);
}
</style>