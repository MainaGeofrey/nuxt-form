<template>
    <div class="w-full max-w-[720px] mx-auto flex flex-col items-start space-y-10">
        <div class="w-full max-w-[648px] space-y-3">
            <div>
                <input type="radio" id="callback" 
                name="hosting"
                value="hosting-big"
                class="hidden peer"
                @click="handleClick('callback')"
                />
                <label for="callback" 
                    class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200
                    rounded-lg cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-blue-600
                    peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100
                    dark:text-gray-400"
                    >
                    <div class="block">
                        <span class="text-lg text-gray-700">Schedule a Call Back</span>
                        <p class="text-sm text-gray-600">Book a virtual appointment with an expert for an expedited
                            pre-approval tailored to your specific needs</p>
                    </div>
                </label>
            </div>

            <div>
                <input type="radio" id="self-serve" 
                name="hosting"
                value="hosting-big"
                class="hidden peer"
                @click="handleClick('self-serve')" 
                />
                <label for="self-serve" 
                    class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200
                    rounded-lg cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-blue-600
                    peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100
                    dark:text-gray-400"
                    >
                    <div class="block">
                        <span class="text-lg text-gray-700">Self-Serve</span>
                        <p class="text-sm text-gray-600">Enjoy a hassle-free experience using our platform and complete your
                            pre-approval at your own pace</p>
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>


const emit = defineEmits(['nextStep']);
let selectedOption = null; 

const nextStepCalendar = () => {
    emit('nextStep',7);
};

const handleClick = (option) => {
    selectedOption = option;

    if(selectedOption === 'callback'){
        nextStepCalendar();
    }

};
</script>

