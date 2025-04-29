<template>
  <section
    class="h-screen flex justify-center items-center max-w-screen-2xl my-0 mx-auto"
  >
    <div class="rounded-lg bg-mainColor flex w-5/6 shadow-xl">
      <div
        class="hidden w-1/2 rounded-l-lg md:flex justify-center bg-cardMainColor"
      >
        <img
          src="@/assets/icons/buen_chico.svg"
          alt="Login Image"
          class="w-full"
        />
      </div>
      <div
        class="w-full md:w-1/2 rounded-r-lg flex justify-center items-center"
      >
        <Transition name="rotate" mode="out-in">
          <component
            :is="isLogin ? Login : SignUp"
            @change-form="(value) => (isLogin = value)"
            :key="isLogin"
          />
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Login from "~/components/forms/Login.vue";
import SignUp from "~/components/forms/SignUp.vue";

definePageMeta({
  layout: "none",
});

const isLogin = ref(true);
</script>

<style scoped>
/* .fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

.rotate-enter-active,
.rotate-leave-active {
  transition: transform 0.4s, opacity 0.4s;
  transform-style: preserve-3d;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotateY(90deg);
}

.rotate-enter-to,
.rotate-leave-from {
  opacity: 1;
  transform: rotateY(0deg);
}
</style>
