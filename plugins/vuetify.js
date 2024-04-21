import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
        themes: {
          light: {
            colors: {
              // background: '#F8E5E5',
              primary: '#faebd7',
              secondary:"#313B58",
              accent: '#E2BD5C',
              success: '#138597',
              alert: '#D11F1B'
             
            },
          },
        },
      },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
      display: {
        mobileBreakpoint: 'md',
        thresholds: {
          xs: 0,
          sm: 340,
          md: 600,
          lg: 960,
          xl: 1280,
        },
      },
  })
  app.vueApp.use(vuetify)
})