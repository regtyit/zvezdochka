<script setup>
import { useDisplay } from 'vuetify'

const { md } = useDisplay()

</script>

<template>
  <v-container>

    <v-row class="start-page">
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile logo">
          <v-img cover src="../assets/images/logo.jpg" style="border-radius: 10px;"></v-img>


        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile">

        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile">

        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile">

        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile">

        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile">

        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile">

        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile">

        </div>

      </v-col>
      <v-col v-if="md" cols="6" sm="4" md="3" class="ma-0 pa-0">
        <div class="tile">
          Доп тайл на среднем экране

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.start-page {

  display: flex;
  justify-content: center;
  align-items: center;
}

.tile {
  border-radius: 5%;
  margin: 5px;
  aspect-ratio: 1;
  border: 1px solid black;


}

.logo {}
</style>
