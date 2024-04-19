<script setup>
import AdditionalService from '../components/AdditionalService.vue'
import { useDisplay } from 'vuetify'
const { md } = useDisplay()
let dialog = ref(false)

</script>

<template>
  <v-container>

    <v-row class="start-page">
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile logo ">
          <!-- <v-img cover src="../assets/images/logo.jpg" style="border-radius: 10px;" class="logo"></v-img> -->

        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile">
          <h2 class="text-center"> Про Звёздочку</h2>
          <div class="sub-menu">
            <p>Описание, условия, фотографии, как добраться</p>

          </div>

        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile">
          <h2>Путевки</h2>
          <!-- <v-btn variant="outlined" class="ma-2" style="font-size: clamp(0.75rem, -0.875rem + 2vw, 1rem);">Купить-онлайн</v-btn> -->
          <div class="sub-menu">
            <p>Стоимость, смены, забронировать</p>
          </div>
        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile" style="background:#313B58; color:white">
          <div class="top-sub-menu">
            <img class="ma-2" src="../assets/icons/vk.svg" alt="">
            <img class="ma-2" src="../assets/icons/odn.svg" alt="">
          </div>

          <h2> <a href="tel:+7 (912) 856-55-69"> <span class="mdi mdi-cellphone-sound"></span> 7(912)856 55 69 </a>
            <br>
          </h2>
          <v-btn @click="dialog = true" variant="outlined" class="ma-2"
            style="font-size: clamp(0.75rem, -0.875rem + 2vw, 1rem);">Обратная связь</v-btn>


          <div class="sub-menu">
            <p>контакты, адрес офиса</p>

          </div>

        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile">
          <h2>новости</h2>
          <div class="sub-menu">
            <p>События, акции, мероприятия</p>

          </div>
        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile">
          <h2>родителям</h2>
          <div class="sub-menu">
            <p>Реквизиты, бланки, документы, вещи с собой</p>

          </div>
        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile">
          <h2> доп услуги</h2>
          <div class="sub-menu">
            <p>Проживание, питание, аренда, квесты</p>

          </div>
        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile ">
          <h2>Работа</h2>
          <div class="sub-menu">
            <p>Вакансии, анкета</p>

          </div>
        </div>

      </v-col>
      <v-col v-if="md" cols="6" sm="4" md="3" class="ma-0 pa-0">
        <div class="tile logo2">


        </div>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="auto">
      <v-card class="overflow-auto pa-4" color="#faebd7">
        <div class="text-end">
          <span @click="dialog = false" class="mdi mdi-close  cursor-pointer"></span>
        </div>


        <Feedback />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style lang="scss" scoped>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  h2 {
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 900;
    font-size: clamp(1.125rem, -1.3125rem + 3vw, 1.5rem);
  }

  .sub-menu {
    position: absolute;
    bottom: 5px;
    right: 5px;

    p {
      text-align: right;
      text-transform: uppercase;
      padding: 5px;
      font-weight: 500;
      font-size: clamp(0.75rem, -0.875rem + 2vw, 1rem);
    }
  }

  .top-sub-menu {
    position: absolute;
    top: 10px;
    right: 10px;
  }

}

.logo {
  height: 100%;
  background-image: url(../assets/images/logo.jpg);
  border: none;
  background-size: cover;

}

.logo2 {
  height: 100%;
  background-image: url(../assets/images/logo2.png);
  border: none;
  background-size: cover;

}
</style>
