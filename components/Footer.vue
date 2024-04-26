<template>
    <v-footer class="footer" height="100px">
        <v-divider width="350px" class="ma-2"></v-divider>
        <div class="d-flex justify-center">
            <NuxtLink to="/permissions">
                <div class="ma-2">Документы</div>
            </NuxtLink>
            <NuxtLink to="/contacts">
                <div class="ma-2">Контакты</div>
            </NuxtLink>
            <NuxtLink to="/presskit">
                <div class="ma-2">Пресс-кит</div>
            </NuxtLink>


        </div>
        <v-divider width="350px" class="ma-2"></v-divider>
        <div>
            <a href="https://qbit-club.com" target="_blank">
                <img src="../assets/images/madewithlove.png" style="width:120px" alt="">
            </a>
        </div>


    </v-footer>

</template>

<style lang="scss" scoped>
.footer {
    background: rgba(1, 1, 1, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
}

a {
    color: black
}
</style>