import { VueDraggableNext } from 'vue-draggable-next'

export default defineNuxtPlugin((app) => {
app.vueApp.component('draggable', VueDraggableNext)
})


