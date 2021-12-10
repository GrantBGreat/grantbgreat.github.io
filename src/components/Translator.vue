<template>
  <div class="flex">
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-4xl font-semibold text-center">
          Scuffedlang Translator
        </h1>
      </div>
      <div class="flex items-baseline mt-4 mb-6">
        <div class="space-x-2 flex"></div>
      </div>
      <div class="flex space-x-3 mb-4 text-sm font-medium">
        <div class="flex-auto flex space-x-3"></div>
      </div>
      <icon @click.native="flip()" id = 'icon' name="refresh" class="ml-44 mb-2 w-7 h-7"/>
      <div class="grid grid-cols-2">
        <textarea
          id="input"
          type="form"
          placeholder="Enter Text"
          @keyup="translate()"
          class="
            form-control
            rounded-md
            bg-gray-50
            border-transparent
            focus:outline-none focus:ring-gray-50 focus:border-transparent
            h-52
            w-9/12
            ml-44
            p-3
            placeholder-gray-400
            text-2xl
          "
        />
        <textarea
          placeholder="Translation"
          disabled="disabled"
          id="final"
          class="
            form-control
            rounded-md
            bg-gray-50
            border-transparent
            focus:outline-none focus:ring-gray-50 focus:border-transparent
            h-52
            w-9/12
            mr-44
            p-3
            placeholder-gray-400
            text-2xl
          "
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    constants : {
      BASE : "qwertyuiopasdfghjklzxcvbnm1234567890",
      SCUFFED : "poiuytrewqlkjhgfdsamnbvcxz0987654321"
    },
    settings : {
      flipped : false
    }
  }),

  methods: {
    translate() {
      let input = document.querySelector("#input").value.toLowerCase();
      let output = "";
      
      input.split('').forEach((letter) => {
        if (this.constants.BASE.indexOf(letter) != -1)
          if (! this.settings.flipped) {
            output += this.constants.SCUFFED.charAt(this.constants.BASE.indexOf(letter));
          } else {
            output += this.constants.BASE.charAt(this.constants.SCUFFED.indexOf(letter));
          }
        else
          output += letter;
      });

      document.querySelector("#final").value = output;
    },
    flip() {
      this.settings.flipped = !this.settings.flipped;
    }
  },
};
</script>
