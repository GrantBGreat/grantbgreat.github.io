<template>
  <div class="flex items-center justify-center h-full w-full bg-gray-100">
    <div class="text-center mb-72">
      <h1 class="text-gray-400 text-4xl font-semibold font-serif uppercase mb-24 md:text-8xl">
        Grant's Website
      </h1>
      <!-- <div class="grid gap-4 grid-cols-2">
        <!- bahahahahahhahahaha gridddd ->
        <div class="w-full rounded">
          <p>boo</p>
        </div>
        <div class="w-full rounded">
          <p>boo</p>
        </div>
        <div class="w-full rounded">
          <p>boo</p>
        </div>
        <div class="w-full rounded">
          <p>boo</p>
        </div>
        <div class="w-full rounded">
          <p>boo</p>
        </div>
        <div class="w-full rounded">
          <p>boo</p>
        </div>
      </div> -->
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