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

</template>

<style scoped lang="scss">
.full-window {
  min-height: calc(100dvh - 140px)
}
</style>
