<template>
  <Header />
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>
