<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const gotoHome = () => {
    router.push('/')
}
</script>

<template>
    <!-- Logo -->
     <header class="bg-sky-100">
        <div class="mx-3 flex items-center justify-between gap-3 px-3 py-4 sm:mx-6 sm:gap-4 sm:px-5 md:mx-10">
            <img @click="gotoHome" src="https://i.pinimg.com/736x/38/5b/a3/385ba3aacb38aafafedf8a45a71ae11c.jpg" alt="" srcset="" class="h-10 w-10 sm:h-12 sm:w-12">
            <h2 class="flex-1 text-center font-bold text-blue-400 bg-sky-200 px-3 py-2 text-lg sm:text-2xl md:text-3xl sm:mx-4 md:mx-10 rounded-2xl shadow-xl">Fiizard TopUp</h2>
            <div>
                <img src="https://i.pinimg.com/736x/04/7d/60/047d603f517f98cd681da68bbd87ee85.jpg" alt="" class="h-10 w-10 sm:h-12 sm:w-12">
            </div>
        </div>
     </header>
</template>
