<template>
  <header class="flex items-center place-content-between mx-6 my-2">
    <div class="h-6 min-w-35 sm:min-w-45 border rounded-xl text-center font-[Syncopate]">
      <NuxtLink to="/">
        GET A BIKE
      </NuxtLink>
    </div>

    <div class="hidden sm:flex w-full justify-end space-x-5">
      <button class="font-[Syncopate] text-sm sm:text-base">
        <NuxtLink to="/shop">
          SHOP
        </NuxtLink>
      </button>
      <button class="font-[Syncopate] text-sm sm:text-base">
        ABOUT US
      </button>
      <FilledBtn class="text-sm sm:text-base px-3 h-7">
        LOG IN
      </FilledBtn>
    </div>

    <div class="flex sm:hidden w-full justify-end space-x-5">
      <button class="font-[Syncopate] text-sm sm:text-base">
        <NuxtLink to="/shop">
          SHOP
        </NuxtLink>
      </button>
      <button class="font-[Syncopate] text-sm sm:text-base">
        ABOUT US
      </button>
      <FilledBtn class="text-sm sm:text-base px-3 h-7">
        LOG IN
      </FilledBtn>
    </div>
  </header>
</template>