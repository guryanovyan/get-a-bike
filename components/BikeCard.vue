<script setup>
defineProps({
  bike: {
    type: Object
  }
});

function displayPrice(price) {
  if (!price) return '';
  return price.toLocaleString('de-DE', { minimumFractionDigits: 0 }).replace(',', '.') + ' €';
}
</script>

<template>
  <div class="h-auto rounded-b-[32px] rounded-t-[99px] inset-ring flex flex-col">
    <img 
      class="rounded-4xl w-full h-40 lg:h-55 object-cover" 
      :src="bike.img" 
      @error="(e) => e.target.src = 'https://placehold.co/400x328'" 
      alt="Bike_Img"
    />
    <div class="text-sm md:text-base lg:text-xl font-['Syncopate'] px-5 pb-2.5">
      <div class="font-[Gruppo]">
        {{ bike.brand }}
      </div>
      <div class="font-bold mt-[-2px] md:mt-[-5px] mb-[-5px] sm:mb-[-7px] md:mb-[-10px]">
        {{ bike.name }}
      </div>
      <div class="font-[Gruppo]">
        {{ bike.type }}
      </div>
      <div class="mt-1 sm:mt-3">
        <span class="text-[#ffc519] font-bold">
          {{ displayPrice(bike.curPrice) + " " }}
        </span>
        <span class="line-through">
          {{ displayPrice(bike?.oldPrice) }}
        </span>
      </div>
    </div>
  </div>
</template>