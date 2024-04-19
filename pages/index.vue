<script setup>
import { useDisplay } from 'vuetify'
const { md } = useDisplay()
let dialog = ref(false)

</script>

<template>
  <v-container>

    <v-row class="start-page">
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile img_1 ">
          <!-- <v-img cover src="../assets/images/logo.jpg" style="border-radius: 10px;" class="logo"></v-img> -->

        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile img_2">
          <h2 class="text-center"> <NuxtLink to="/about/description"> О Звёздочке</NuxtLink></h2>
          <div class="sub-menu">
            <p>Описание, условия, фотографии, как добраться</p>

          </div>

        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile img_3">
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
            style="font-size: clamp(0.625rem, -0.05rem + 1.2vw, 1rem);">Обратная связь</v-btn>


          <div class="sub-menu">
            <p>контакты, адрес офиса</p>

          </div>

        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile img_4">
          <h2>
            <NuxtLink to="/news">новости</NuxtLink>
          </h2>
          <div class="sub-menu">
            <p>
              <NuxtLink to="/news">События, акции, мероприятия</NuxtLink>
            </p>

          </div>
        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile img_5"> 
           <h2> <NuxtLink to="/toparents/takewith">родителям</NuxtLink></h2>
          <div class="sub-menu">
            <p>Реквизиты, бланки, документы, вещи с собой</p>

          </div>
        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile img_6">
          <h2><NuxtLink to="/additionalservice">доп услуги</NuxtLink></h2>
          <div class="sub-menu">
            <p>Проживание, питание, аренда, квесты</p>

          </div>
        </div>

      </v-col>
      <v-col class="ma-0 pa-0" cols="6" sm="4" md="3">
        <div class="tile img_7">
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
      <v-card class="overflow-x-hidden pa-4" color="#faebd7">
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
  border: none;
  background-size: cover;
  color: white;
  position: relative;

  h2 {
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 900;
    font-size: clamp(1rem, 0.1rem + 1.6vw, 1.5rem);
  }

  .sub-menu {
    position: absolute;
    bottom: 3px;
    right: 3px;

    p {
      text-align: right;
      text-transform: uppercase;
      padding: 5px;
      font-weight: 500;
      font-size: clamp(0.625rem, -0.05rem + 1.2vw, 1rem);
    }
  }

  .top-sub-menu {
    position: absolute;
    top: 10px;
    right: 10px;
  }

}

.img_1 {
  background-image: url(../assets/images/img_1.jpg);
}

.img_2 {
  background-image: url(../assets/images/img_2.jpg);
}

.img_3 {
  background-image: url(../assets/images/img_3.jpg);
}

.img_4 {
  background-image: url(../assets/images/img_4.jpg);
}

.img_5 {
  background-image: url(../assets/images/img_5.jpg);
}

.img_6 {
  background-image: url(../assets/images/img_6.jpg);
}

.img_7 {
  background-image: url(../assets/images/img_7.jpg);
}

.logo2 {
  height: 100%;
  background-image: url(../assets/images/logo2.png);
  border: none;
  background-size: cover;

}
</style>
