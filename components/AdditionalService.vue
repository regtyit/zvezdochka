<script setup>
import AdditionalServiceJSON from '../db/AdditionalService.json'

let data = ref('')
data = AdditionalServiceJSON
</script>
<template>
    <v-row justify="center">
        <v-col cols="6">
            <h1>Прайс-лист на обслуживание
                Декабрь - Май 2024г.</h1>
        </v-col>
    </v-row>
    <v-row justify="space-between">
        <v-col cols="6">
            <v-data-iterator :items="data.left_list">
                <template v-slot:default="{ items }">

                    <div v-for="(item, i) in items" :key="i" class="service">
                        <div class="title">{{ item.raw.name }}</div>
                        <div class="price">{{ item.raw.price }}</div>
                    </div>

                </template>

            </v-data-iterator>
        </v-col>
        <v-col cols="6">
            <v-data-iterator :items="data.right_list">
                <template v-slot:default="{ items }">

                    <div v-for="(item, i) in items" :key="i" class="service">
                        <div class="title">{{ item.raw.name }}</div>
                        <div class="price">{{ item.raw.price }}</div>
                    </div>

                </template>

            </v-data-iterator>
        </v-col>
    </v-row>

</template>
<style scoped>
h1 {
    text-align: center;
    font-family: 'Roboto', Arial, sans-serif;
}
.title {
    width: 50dvw;
}
.service{
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
}
</style>