<template>
  <div class="relative w-full max-w-72 my-0 mx-auto">
    <input
      :id="id"
      :name="id"
      :type="type"
      :placeholder="' '"
      :required="required"
      class="peer w-full border-b-2 border-gray-300 bg-transparent pt-4 pb-1 pl-2 transition-all"
      @input="handleInput"
    />
    <label
      :for="id"
      class="absolute left-2 -top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-mainColor uppercase tracking-wide"
    >
      {{ label }}
      <span v-if="required" class="text-red-700 text-lg">*</span>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
}>();

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<style scoped>
label,
span {
  font-family: "QuickSandBold";
}

input {
  font-family: "QuickSand";
}

input:focus-visible,
label:focus-visible {
  outline: none;
}
</style>
