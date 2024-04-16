<script lang="ts" setup>

</script>

<template>
<v-app>
    <!-- <v-app-bar :elevation="0"> -->
      <!-- <v-container> -->
        <!-- <v-row class="d-flex flex-nowrap justify-space-between align-center"> -->
          <!-- <h2>Афиши</h2> -->
          <!-- <div>
            <a href="https://plpo.ru" target="_blank">

              <img src="@/assets/logo.webp" class="logo cursor-pointer" style="height: 30px;:"
               /></a>
          </div>
          <div class="d-flex align-center">

            <v-icon :class="{ active: isFiltered }" icon="mdi-filter-outline" @click="showFilter = !showFilter"></v-icon>

            <v-btn :ripple="false" class="rounded text-body-1 font-weight-regular disabled"
              style="letter-spacing: normal !important; height: 40px;" prepend-icon="mdi-map-marker-outline">
              {{ location ? shortLocationName : "Место" }}
            </v-btn>

          </div>
        </v-row>

      </v-container>
    </v-app-bar> -->
<!-- 
    <v-dialog transition="scale-transition" v-model="showFilter" fullscreen>
      <v-card>
        <Filter @closeDialog="closeFilter()" :isStartPage="false" />
      </v-card>
    </v-dialog> -->

    <v-main>

      <NuxtPage />

    </v-main>

    <!-- <Bottom class="d-flex d-sm-none" /> -->
  </v-app>
</template>

<style scoped></style>
