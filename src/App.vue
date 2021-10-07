<template>
  <div id="app" class="bg-amber-900">
    <transition name="fade" mode="out-in">
        <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    setServerStatus() {
      return;
    }, created() {
      return
    }
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
#app {
  height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0
}
.blink_me {
  animation: blinker 2s linear infinite;
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
#shift {
    margin-right: 15px;
  }
@media only screen and (max-width: 800px) {
  #shift {
    margin-right: 0px;
  }
}
</style>