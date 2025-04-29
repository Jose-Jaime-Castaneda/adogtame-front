<template>
  <form
    @submit.prevent="handleSubmit"
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
      <span
        class="text-mainBrown font-bold hover:cursor-pointer"
        @click="handleChange"
        >Crea una</span
      >
    </p>

    <input
      type="submit"
      value="Iniciar Sesión"
      class="bg-ctaButtons hover:bg-ctaButtonsHover rounded-lg font-quicksand-regular font-semibold text-white px-4 py-2 uppercase hover:cursor-pointer"
    />
  </form>
</template>

<script setup lang="ts">
import InputForm from "./InputForm.vue";

const emit = defineEmits<{
  changeForm: [value: boolean];
}>();

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  console.log("Correo: " + email.value + " Contraseña: " + password.value);
};

const handleChange = async () => {
  emit("changeForm", false);
};
</script>

<style scoped></style>
