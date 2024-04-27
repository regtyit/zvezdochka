<script setup>

onMounted(() => {
  const script = document.createElement('script');
  script.src = "https://forms.yandex.ru/_static/embed.js";
  document.body.appendChild(script);

});
</script>
<template>

  <iframe src="https://forms.yandex.ru/cloud/661e070a73cee70ee51edc78/?iframe=1" frameborder="0"
    name="ya-form-661e070a73cee70ee51edc78" style="max-width: 400px">
  </iframe>
</template>