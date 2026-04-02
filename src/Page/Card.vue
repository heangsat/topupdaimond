<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    imageSrc: {
        type: String,
        required: true,
    },
    imageAlt: {
        type: String,
        default: 'Top up card',
    },
});

const router = useRouter();

const gotoTopup = () => {
    router.push('/topup')
}
</script>
<template>
    <div class="w-full max-w-48 rounded-2xl p-2 shadow-lg">
        <div class="relative aspect-square overflow-hidden rounded-xl">
            <img :src="props.imageSrc" :alt="props.imageAlt" class="h-full w-full object-cover " />

            <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            </div>
        </div>

        <button @click="gotoTopup" class="mt-2 w-full rounded-lg bg-sky-200 py-2 text-xs font-bold uppercase text-sky-500 cursor-pointer">
            Top Up
        </button>
    </div>
</template>