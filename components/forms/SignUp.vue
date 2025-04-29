<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col gap-5 bg-cardMainColor rounded-lg p-4 w-full md:w-5/6 md:my-10"
  >
    <p class="text-center text-2xl px-3 my-5">
      Crea una cuenta para encontrar a tu próximo
      <span class="text-mainBrown font-bold uppercase">mejor amigo</span>
    </p>

    <Transition name="fade-slide" mode="out-in">
      <Transition name="fade-slide" mode="out-in">
        <div class="w-full">
          <!-- Paso 1 -->
          <div v-show="currentStep === 0" class="space-y-3">
            <InputForm
              v-for="(field, index) in formSteps[0]"
              :key="field.id"
              :id="field.id"
              :label="field.label"
              :type="field.type"
              :placeholder="field.label"
              :required="field.required"
              v-model="field.model.value"
            />
          </div>

          <!-- Paso 2 -->
          <div v-show="currentStep === 1" class="space-y-3">
            <InputForm
              v-for="(field, index) in formSteps[1]"
              :key="field.id"
              :id="field.id"
              :label="field.label"
              :type="field.type"
              :placeholder="field.label"
              :required="field.required"
              v-model="field.model.value"
            />
          </div>

          <!-- Paso 3 -->
          <div v-show="currentStep === 2" class="space-y-3">
            <InputForm
              v-for="(field, index) in formSteps[2]"
              :key="field.id"
              :id="field.id"
              :label="field.label"
              :type="field.type"
              :placeholder="field.label"
              :required="field.required"
              v-model="field.model.value"
            />
          </div>
        </div>
      </Transition>
    </Transition>

    <div class="flex justify-between mt-4">
      <button
        v-if="currentStep > 0"
        type="button"
        class="text-mainBrown font-bold"
        @click="prevStep"
      >
        ← Anterior
      </button>

      <button
        v-if="currentStep < formSteps.length - 1"
        type="button"
        class="text-mainBrown font-bold ml-auto"
        @click="nextStep"
      >
        Siguiente →
      </button>
    </div>

    <p class="text-center text-lg my-5">
      ¿Ya tienes una cuenta?
      <span
        class="text-mainBrown font-bold hover:cursor-pointer"
        @click="handleChange"
        >Inicia sesión</span
      >
    </p>

    <input
      v-if="currentStep === formSteps.length - 1"
      type="submit"
      value="Crear Cuenta"
      class="bg-ctaButtons hover:bg-ctaButtonsHover rounded-lg font-quicksand-regular font-semibold text-white px-4 py-2 uppercase hover:cursor-pointer"
    />
  </form>
</template>

<script setup lang="ts">
import InputForm from "./InputForm.vue";

const emit = defineEmits<{
  changeForm: [value: boolean];
}>();

const currentStep = ref(0);

const formSteps = [
  [
    // Paso 1
    {
      id: "name",
      label: "Nombre",
      type: "text",
      required: true,
      model: ref(""),
    },
    {
      id: "username",
      label: "Nombre de Usuario",
      type: "text",
      required: false,
      model: ref(""),
    },
    {
      id: "fLastname",
      label: "Primer Apellido",
      type: "text",
      required: true,
      model: ref(""),
    },
    {
      id: "sLastname",
      label: "Segundo Apellido",
      type: "text",
      required: false,
      model: ref(""),
    },
  ],
  [
    // Paso 2
    {
      id: "phone",
      label: "Teléfono",
      type: "tel",
      required: true,
      model: ref(""),
    },
    {
      id: "email",
      label: "Correo",
      type: "email",
      required: true,
      model: ref(""),
    },
  ],
  [
    // Paso 3
    {
      id: "password",
      label: "Contraseña",
      type: "password",
      required: true,
      model: ref(""),
    },
    {
      id: "confirmPassword",
      label: "Confirmar Contraseña",
      type: "password",
      required: true,
      model: ref(""),
    },
  ],
];

const validateStep = () => {
  return formSteps[currentStep.value].every((field) => {
    if (!field.required) return true;
    return field.model.value.trim() !== "";
  });
};

const nextStep = () => {
  if (!validateStep()) {
    alert("Por favor llena todos los campos obligatorios");
    return;
  }
  if (currentStep.value < formSteps.length - 1) currentStep.value++;
};

const prevStep = () => {
  if (currentStep.value > 0) currentStep.value--;
};

const handleSubmit = async () => {
  const userData = formSteps.flat().reduce((acc, field) => {
    acc[field.id] = field.model.value;
    return acc;
  }, {} as Record<string, string>);

  console.log("Datos del usuario:", userData);
};

const handleChange = async () => {
  emit("changeForm", true);
};
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
