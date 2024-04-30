<script setup>
useSeoMeta({
  title: 'Звёздочка - детский загородный лагерь',
  ogTitle: 'Детский загородный лагерь Зёздочка',
  description: 'Подарите вашему ребенку незабываемые впечатления от летнего отдыха на природе с богатой программой для детей возрастом от 7 до 17 лет!',
  ogDescription: 'Подарите вашему ребенку незабываемые впечатления от летнего отдыха на природе с богатой программой для детей возрастом от 7 до 17 лет!',
  ogImage: './long_logo.png',
  twitterCard: 'summary_large_image',
})
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap' }
  ]
})
onMounted(() => {
  const script = document.createElement('script');
  script.src = "https://forms.yandex.ru/_static/embed.js";
  document.body.appendChild(script);

});
</script>
<template>
  <NuxtPwaManifest />
  <NuxtLayout />
</template>
