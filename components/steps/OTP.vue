<template>
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
                <div class="flex flex-col items-center justify-center text-center space-y-2">
                    <div class="font-semibold text-3xl">
                        <p>Phone Verification</p>
                    </div>
                    <div class="flex flex-row text-sm font-medium text-gray-400">
                        <p>We have sent a code to your phone {{ maskedPhoneNumber }}</p>
                    </div>
                </div>

                <div>
                    <form action="" method="post">
                        <div class="flex flex-col space-y-16">




                            <div class="justify-between mx-auto w-full max-w-xs">
                                <div class="flex space-x-6 w-16 h-16">
                                    <input v-for="(code, idx) in codes" :key="idx" v-model="code.value"
                                        @keydown="onKeyDown(idx, $event)" 
                                        class="w-16 h-16 flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 code"
                                        placeholder="0" min="0" max="9" required ref="codeInputs" maxlength="1" />
                                </div>
                            </div>







                            <div v-if="showModal">
                                <div class="fixed inset-0 overflow-y-auto flex justify-center items-center"
                                    aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                    <!-- Background overlay -->
                                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                                        aria-hidden="true"></div>

                                    <!-- Modal panel -->
                                    <div class="bg-white p-4 sm:p-0 w-full max-w-lg rounded-lg shadow-lg">
                                        <!-- Modal content -->
                                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div class="sm:flex sm:items-start">
                                                <!-- Content goes here -->
                                                <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
                                                    <div class="relative p-4 bg-white rounded-lg shadow">
                                                        <div
                                                            class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                                                        
                                                            <h3 class="">
                                                                Change your phone number.
                                                            </h3>
                                                        </div>
                                                        <div
                                                            class="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">

                                                            <div
                                                                class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                                                                <button id="close-modal" type="button" @click="closeModal"
                                                                    class="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300
                                                                     hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                                                                <button id="confirm-button" type="button"
                                                                    class="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 f
                                                                    ocus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:bg-gray-700">Confirm</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button @click="closeModal"
                                                        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                                            viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="flex flex-col space-y-5">
                                <div>
                                    <button @click="handleSubmit"
                                        class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                        Verify Account
                                    </button>
                                </div>

                                <div
                                    class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                    <p>Didn't recieve code?</p>
                                    <a class="flex flex-row items-center text-blue-600 cursor-pointer" @click="openModal"
                                        target="_blank" rel="noopener noreferrer">Resend</a>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';




const phoneNumber = "613-555-0160"; // Replace this with your actual phone number

const showModal = ref(false);

const codes = [
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
];

// Function to mask the phone number
const maskPhoneNumber = () => {
    const parts = phoneNumber.split('-');
    const lastThreeDigits = parts[2].substr(parts[2].length - 3);
    const maskedPhoneNumber = `***-***-${lastThreeDigits}`;
    return maskedPhoneNumber;
};



const emit = defineEmits(['nextStep']);


const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};


const maskedPhoneNumber = maskPhoneNumber();

const handleSubmit = () => {
    // Add your submission logic here
    next()
};


const next = () => {
    emit('nextStep');
}






const onKeyDown = (idx, event) => {
    if (event.key >= 0 && event.key <= 9) {
        codes[idx].value = '';
        setTimeout(() => focusNextCodeInput(idx), 10);
    } else if (event.key === 'Backspace') {
        setTimeout(() => focusPreviousCodeInput(idx), 10);
    }
};


const focusNextCodeInput = (idx) => {
    if (idx < codes.length - 1) {
        const nextInput = document.querySelector(`.code:nth-child(${idx + 2})`);
        if (nextInput) {
            nextInput.focus();
        }
    }
};

const focusPreviousCodeInput = (idx) => {
    if (idx > 0) {
        const prevInput = document.querySelector(`.code:nth-child(${idx})`);
        if (prevInput) {
            prevInput.focus();
        }
    }
};





</script>


