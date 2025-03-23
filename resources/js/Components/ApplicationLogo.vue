<script setup>

    import { ref } from 'vue';

    const laravel_image = ref('/images/laravel-2.png');
</script>

<template>
    <img :src="laravel_image" />
</template>
