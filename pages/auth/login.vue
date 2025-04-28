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
        <form
          @submit.prevent="handleLogin"
          class="flex flex-col gap-5 bg-cardMainColor rounded-lg p-4 w-full md:w-5/6 md:my-10"
        >
          <p class="text-center text-2xl px-3 my-5">
            Inicia sesión para adoptar a tu siguiente
            <span class="text-mainBrown font-bold uppercase">mejor amigo</span>
          </p>

          <InputForm
            :id="'email'"
            :label="'Correo'"
            :type="'email'"
            :placeholder="'Correo electronico'"
            :required="true"
            v-model="email"
          />
          <InputForm
            :id="'password'"
            :label="'Contraseña'"
            :type="'password'"
            :placeholder="'Contraseña'"
            :required="true"
            v-model="password"
          />

          <p class="text-center text-lg my-5">
            ¿No tienes una cuenta?
            <span class="text-mainBrown font-bold">Crea una</span>
          </p>

          <input
            type="submit"
            value="Iniciar Sesión"
            class="bg-ctaButtons hover:bg-ctaButtonsHover rounded-lg font-quicksand-regular font-semibold text-white px-4 py-2 uppercase"
          />
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import InputForm from "~/components/forms/InputForm.vue";

definePageMeta({
  layout: "none",
});

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  console.log("Correo: " + email.value + " Contraseña: " + password.value);
};
</script>

<style scoped></style>
