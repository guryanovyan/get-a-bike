<script setup>
const bikes = ref([]);

onMounted(async () => {
  try {
    bikes.value = await $fetch('/api/bikes');
  } catch (error) {
    console.error('Ошибка загрузки велосипедов:', error);
  }
});
</script>

<template>
  <div class="mx-6 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10">
    <BikeCard v-for="bike in bikes" :key="bike.id" :bike="bike" />
  </div>
</template>