<script lang="ts" setup>

</script>

<template>

  <v-layout class="flex-column">
    <AppBar />

    <v-main class="full-window">
      <NuxtPage />

    </v-main>
    <Footer />


  </v-layout>

    <!-- <Bottom class="d-flex d-sm-none" /> -->
  </v-app>
</template>

<style scoped lang="scss">
.full-window {
  min-height: calc(100dvh - 140px)
}
</style>
