<template>
  <div class="w-full h-full bg-cover bg-center background-image">
    <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
      <div class="text-center mb-72">
        <h1 class="text-white text-4xl font-semibold font-serif uppercase mb-24 md:text-8xl">
          GrantBGreat's Website
        </h1>
      </div>

      <!-- animated tumbleweed -->
      <!--<div class="mt-72">
        <img
          class="motion-safe:animate-reverse-spin-slow h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
          style="max-width: 250px;"
          :src=tumbleweed
          alt="A very interesting tumbleweed"
        />
      </div>-->
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tumbleweed: require('@/assets/home/tumbleweed.png'),
      };
    },
  };

  window.addEventListener("load", function(){
    console.clear();
    console.error('%c Peekaboo!', 'font-size: 50px; text-transform: uppercase; color: white; text-shadow: 2px 2px red, 4px 4px orange, 6px 6px yellow, 8px 8px green; 10px 10px blue, 12px 12px purple;');
    console.log('Did you know CSS works in the console?');
  });
</script>

<style scoped>
.background-image {
  background-image: url("~@/assets/home/desert2.webp");
}
</style>