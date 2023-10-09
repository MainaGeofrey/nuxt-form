<template>
    <div class="w-full max-w-[720px] mx-auto flex flex-col items-start space-y-4">
        <div class=" w-full flex items-center space-x-2">
            <div class="text-[#0487AF] flex items-center space-x-1">
                <span>3</span>
                <svg height="10" width="11" class=" fill-current ">
                    <path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path>
                    <path d="M8 4v2H0V4z"></path>
                </svg>
            </div>
            <h1 class="text-[#C23C3B]  text-xl">How would you like to claim your vehicle?*</h1>
        </div>


        <div class="w-full max-w-[648px] space-y-3">
            <div>
                <input type="radio" id="delivery" name="hosting" value="hosting-big" class="hidden peer"
                    @click="handleClick('delivery')" />
                <label for="delivery" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200
                    rounded-lg cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-blue-600
                    peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100
                    dark:text-gray-400">
                    <div class="block">
                        <span class="text-lg text-gray-700">Delivery</span>
                    </div>
                </label>
            </div>

            <div>
                <input type="radio" id="pickup" name="hosting" value="hosting-big" class="hidden peer"
                    @click="handleClick('pickup')" />
                <label for="pickup" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200
                    rounded-lg cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-blue-600
                    peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100
                    dark:text-gray-400">
                    <div class="block">
                        <span class="text-lg text-gray-700">Pickup</span>
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>


const emit = defineEmits(['nextStep']);
let selectedOption = null;

const nextStep = () => {
    emit('nextStep');
};

const handleClick = (option) => {
    selectedOption = option;
    nextStep();

};
</script>

