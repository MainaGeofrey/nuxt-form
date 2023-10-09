<template>
    <div>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" @click="handleClick">
        <label for="hosting-big"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-blue-500
             peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400"> <!--dark:bg-gray-800 dark:hover:bg-gray-700-->
            <div class="block">
                <span class="text-lg text-gray-700">{{ title }}</span>
                <p class="text-sm text-gray-600">{{ description }}</p>
            </div>

        </label>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    title: String,
    description: String,
    selected: Boolean, // Added 'selected' prop
});

const emit = defineEmits(['nextStep']);

const handleClick = () => {
    console.log("emit step**");
    emit('nextStep');
};
</script>
