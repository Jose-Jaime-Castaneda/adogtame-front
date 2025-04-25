<template>
  <header
    class="bg-mainColor sticky top-0 shadow-md border-r-8 border-r-gray-700 p-3"
  >
    <nav class="flex items-center justify-between">
      <NuxtLink
        to="/"
        class="flex gap-5 items-center border-b-8 border-b-gray-700 rounded-lg"
      >
        <p class="uppercase text-3xl font-quicksand-bold tracking-regular">
          Adogtame
        </p>
        <img
          src="@/assets/icons/perro_sentado.svg"
          alt="Perro Sentado"
          class="h-16"
        />
      </NuxtLink>

      <!-- No loggeado -->
      <NuxtLink
        to="/auth/login"
        class="bg-ctaButtons hover:bg-ctaButtonsHover rounded-lg font-quicksand-regular font-semibold text-white px-4 py-2"
      >
        Iniciar Sesión
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
