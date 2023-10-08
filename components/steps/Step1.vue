<template>
    <div class=" w-full max-w-[720px] mx-auto flex flex-col items-start md:space-x-7 space-y-4 ">
       <div class=" w-full flex items-center space-x-2">
            <div class="text-[#0487AF] flex items-center space-x-1">
                <span>1</span>
                <svg height="10" width="11" class=" fill-current "><path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path><path d="M8 4v2H0V4z"></path></svg>
            </div>
            <h1 class="text-[#C23C3B]  text-xl">What is your preferred Vehicle Type?*</h1>
       </div>
       <div class="w-full max-w-[648px] grid grid-cols-2 sm:grid-cols-4 gap-2 ">
            <CarCard  :class="{'flash':item.is_active}" v-for="(item,index,key) in cars" :key="key" :image='item.image' :title="item.title" :is_active='item.is_active' @click="select(item)"/>
       </div>
    </div>
</template>

<script setup>
 import CarCard from "@/components/UI/CarCard.vue";
 const emit = defineEmits(['nextStep']);
 const cars = ref([
    {
        image: 'https://shop.canadauto.ca/wp-content/uploads/2023/09/Depositphotos_7486411_S.jpg',
        title: 'Sedan',
        is_active: false,
    },
     {
        image: 'https://shop.canadauto.ca/wp-content/uploads/2023/09/Depositphotos_526166136_S.jpg',
        title: 'SUV',
        is_active: false,
    },
     {
        image: 'https://shop.canadauto.ca/wp-content/uploads/2023/09/Depositphotos_564946972_S.jpg',
        title: 'Truck',
        is_active: false,
    },
     {
        image: 'https://shop.canadauto.ca/wp-content/uploads/2023/09/Depositphotos_353686092_S.jpg',
        title: 'Van',
        is_active: false,
    },
 ])

    const select = (item) => {
        cars.value.forEach((car) => {
            car.is_active = false;
        })
        item.is_active = true;
        setTimeout(() => {
            emit('nextStep');
        }, 500);
    }


</script>


