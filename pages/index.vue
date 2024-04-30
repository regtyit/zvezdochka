<script setup>
import { useDisplay } from 'vuetify'
import { gsap } from "gsap";

const { md, mdAndDown } = useDisplay()
let dialog = ref(false)

let animationPlayed = ref(false)

let tiles = ref([
  {
    title: '',
    topSubMenu: false,
    subMenu: '',
    tileId: 'img_1',
    moveClass: 'tile_1',
    routeTo: ''

  },
  {
    title: 'О Звёздочке',
    topSubMenu: false,
    subMenu: 'Описание, условия, фотографии, как добраться',
    tileId: 'img_2',
    routeTo: '/about/description'

  },
  {
    title: 'Путевки',
    topSubMenu: false,
    subMenu: 'Стоимость, смены, забронировать',
    tileId: 'img_3',
    routeTo: '/pass'

  },
  {
    title: '',
    topSubMenu: true,
    subMenu: 'Контакты, адрес офиса',
    tileId: 'img_8',
    routeTo: '/contacts'

  },
  {
    title: 'Новости',
    topSubMenu: false,
    subMenu: 'События, акции, мероприятия',
    tileId: 'img_4',
    routeTo: '/news'

  },
  {
    title: 'Родителям',
    topSubMenu: false,
    subMenu: 'Реквизиты, бланки, вещи с собой',
    tileId: 'img_5',
    routeTo: '/toparents/takewith'

  },
  {
    title: 'Доп. услуги',
    topSubMenu: false,
    subMenu: 'Проживание, питание, аренда, квесты',
    tileId: 'img_6',
    routeTo: '/additionalservice'

  },
  {
    title: 'Работа',
    topSubMenu: false,
    subMenu: 'Вакансии, анкета',
    tileId: 'img_7',
    routeTo: '/job'

  }
])


onMounted(async () => {

  animationPlayed.value = sessionStorage.getItem("animationPlayed")
  if (process.browser && !animationPlayed.value) {
    await nextTick();
    gsap.from("#img_1", { x: -100, duration: 1 });
    gsap.from("#img_2", { y: -100, duration: 1 });
    gsap.from("#img_3", { y: -100, duration: 1 });
    gsap.from("#img_4", { x: -100, duration: 1 });
    gsap.from("#img_5", { y: 100, duration: 1 });
    gsap.from("#img_6", { y: 100, duration: 1 });
    gsap.from("#img_7", { x: 100, duration: 1 });
    gsap.from("#img_8", { x: 100, duration: 1 });

    // Устанавливаем флаг, что анимация выполнена
    animationPlayed.value = true;
    // Сохраняем состояние анимации в sessionStorage
    sessionStorage.setItem("animationPlayed", "true");
  }
}
)

</script>

<template>
  <v-container>
    <ClientOnly>
      <v-row>
        <v-col class="d-flex justify-end justify-md-center">
          <v-btn color="alert" to="/reservationpage">Купить путевку</v-btn>
        </v-col>
      </v-row>
      <v-row class="start-page">

        <draggable class="d-flex flex-wrap" :disabled="mdAndDown">
          <v-col v-for="tile, index in tiles" :key="index" class="ma-0 pa-0 " cols="6" sm="4" md="3">
            <div class="tile" :id="tile.tileId">
              <div v-if="tile.topSubMenu" class="top-sub-menu">
                <a href="https://vk.com/public204964757" target="_blank"><img class="ma-2" src="../assets/icons/vk.svg"
                    alt=""></a>
                <a href="https://ok.ru/group/70000001824558" target="_blank"><img class="ma-2"
                    src="../assets/icons/odn.svg" alt=""></a>
              </div>
              <h2 v-if="tile.title" class="text-center">
                <NuxtLink :to="tile.routeTo"> {{ tile.title }}</NuxtLink>
              </h2>
              <div v-if="tile.topSubMenu">
                <h2> <a href="tel:+7 (912) 856-55-69"> <span class="mdi mdi-cellphone-sound"></span> 7(912)856 55 69
                  </a>
                  <br>
                </h2>
                <v-btn to="feedbackpage" variant="outlined" class="ma-2"
                  style="font-size: clamp(0.625rem, -0.05rem + 1.2vw, 1rem);">Обратная связь</v-btn>

              </div>

              <div class="sub-menu">

                <NuxtLink :to="tile.routeTo">
                  <p>{{ tile.subMenu }}</p>
                </NuxtLink>


              </div>

            </div>
          </v-col>
          <v-col v-if="md" cols="6" sm="4" md="3" class="ma-0 pa-0">
            <div class="tile h-100">

              <v-img src="../assets/images/big_logo.svg" width="150px" >
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate></v-progress-circular>
                            </v-row>
                        </template>
                        <template v-slot:error>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <span>Ошибка загрузки изображения</span>
                            </v-row>
                        </template>
                    </v-img>
            </div>
          </v-col>
        </draggable>


      </v-row>
      <v-dialog v-model="dialog" width="auto">
        <div class=" pa-4 overflow-x-hidden" style="background: white;">


          <div class="text-end">
            <span @click="dialog = false" class="mdi mdi-close  cursor-pointer"></span>
          </div>


          <Feedback />
        </div>
      </v-dialog>
    </ClientOnly>
  </v-container>
</template>

<style lang="scss" scoped>
.start-page {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

}

.tile {
  border-radius: 5px;
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
    bottom: 0px;
    right: 0px;




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

#img_1 {
  background-image: url(../assets/images/img_1.jpg);
}

#img_2 {
  background-image: url(../assets/images/img_2.jpg);
}

#img_3 {
  background-image: url(../assets/images/img_3.jpg);
}

#img_4 {
  background-image: url(../assets/images/img_4.jpg);
}

#img_5 {
  background-image: url(../assets/images/img_5.jpg);
}

#img_6 {
  background-image: url(../assets/images/img_6.jpg);
}

#img_7 {
  background-image: url(../assets/images/img_7.jpg);
}

#img_8 {
  background-image: url(../assets/images/img_8.jpg);
}
</style>
