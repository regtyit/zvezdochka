<script setup>
import { useDisplay } from 'vuetify'
const { md } = useDisplay()

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
          <div class="sub-menu">
            <p>Стоимость, смены, забронировать</p>
          </div>
        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile" style="background:#313B58; color:white">
          <div class="top-sub-menu">
           <img class="ma-2" src="../assets/icons/vk.svg"
                            alt="">
          </div>

          <h2> <a href="tel:+7 (912) 856-55-69"> <span class="mdi mdi-cellphone-sound"></span> 7(912)856 55 69 </a>
          </h2>


          <div class="sub-menu">
            <p>контакты, адрес</p>

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
            <p>Реквизиты, бланки, сертификаты, документы, вещи с собой</p>

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

  position: relative;

  h2 {
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 900;
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
      font-size: 16px;
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
