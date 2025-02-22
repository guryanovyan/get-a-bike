<template>
  <div class="bg-[url('/images/MainBnr_Img.jpg')] bg-cover bg-no-repeat bg-top h-dvw sm:h-screen">
    <div class="flex flex-col text-right text-white font-['Syncopate'] font-bold text-2xl sm:text-4xl lg:text-5xl pt-20 sm:pt-25 pe-6">
      <span>STOP</span>
      <span class="pt-1 sm:pt-5">WALKING</span>
      <span class="pt-15 sm:pt-20">START</span>
      <span class="pt-1 sm:pt-5">RIDING</span>
      <span class="font-['Gruppo'] font-normal text-lg sm:text-xl lg:text-2xl pt-15 sm:pt-20">Find yourself a bike</span>
    </div>
  </div>
  <div class="m-3 sm:m-6 xl:mx-14 grid grid-cols-3 gap-3 sm:gap-6 xl:gap-8 font-[Syncopate]">
    <div class="col-span-2 border rounded-xl lg:rounded-4xl p-4 md:p-6 relative">
      <p class="font-bold text-sm sm:text-2xl lg:text-3xl">
        Buy or sell a bike
      </p>
      <p class="text-xs sm:text-xl lg:text-2xl font-['Gruppo']">
        The best european bike market place
      </p>
      <div class="flex gap-10 sm:gap-20 md:gap-40 xl:gap-80 absolute bottom-0 left-0 right-0 mb-[-10px] sm:mb-[-15px] justify-center">
        <FilledBtn class="text-sm sm:text-lg lg:text-2xl h-6 sm:h-7 lg:h-10 px-4 sm:px-10 lg:px-13">
          <NuxtLink to="/shop">
            BUY
          </NuxtLink>
        </FilledBtn>
        <FilledBtn class="text-sm sm:text-lg lg:text-2xl h-6 sm:h-7 lg:h-10 px-4 sm:px-10 lg:px-13">
          SELL
        </FilledBtn>
      </div>
    </div>
    <img :src="'/images/Bike1_Img.jpg'" alt="Bike1_Img" class="rounded-xl lg:rounded-4xl"/>
    <div class="rounded-xl lg:rounded-4xl bg-[#CACACA] p-4 md:p-6">
      <p class="font-bold text-sm sm:text-2xl lg:text-3xl xl:pr-20">
        We are based in all of EU
      </p>
      <p class="text-xs sm:text-xl lg:text-2xl font-['Gruppo'] xl:pr-60 mt-5">
        Find your bike or customer right in your city
      </p>
    </div>
    <img :src="'/images/Bike2_Img.jpg'" alt="Bike2_Img" class="rounded-xl lg:rounded-4xl"/>
    <div class="border rounded-xl lg:rounded-4xl p-4 md:p-6">
      <p class="font-bold text-sm sm:text-2xl lg:text-3xl xl:pr-20">
        We are based in all of EU
      </p>
      <p class="text-xs sm:text-xl lg:text-2xl font-['Gruppo'] xl:pr-60 mt-5">
        Find your bike or customer right in your city
      </p>
    </div>
  </div>
</template>
