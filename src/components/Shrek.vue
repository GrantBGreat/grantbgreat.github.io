<template>
    <img
        class="w-full h-full"
        :src=shrek
        alt="whaddu doing??"
    />
</template>

<script>
    export default {
        data () {
            return {
                shrek: require('@/assets/Shrek.jpg'),
            };
        },
    };
</script>