<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import Card from "./Card.vue";

const banners = [
  {
    src: "https://mir-s3-cdn-cf.behance.net/projects/404/62f52c226611529.Y3JvcCwyMzAxLDE4MDAsNTEsMA.jpg ",
    alt: "Mobile banner 1",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/projects/404/37e5c5126996089.Y3JvcCwxNDA5LDExMDIsMCwzOA.png",
    alt: "Mobile banner 2",
  },
  {
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d6a3e33-1a32-4261-b024-6872a7ab2a05/dgdttsf-5341a9a1-c765-4897-a887-62c9de28d67e.jpg/v1/fill/w_1280,h_563,q_75,strp/chou_banner_by_hynee1_dgdttsf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6Ii9mLzRkNmEzZTMzLTFhMzItNDI2MS1iMDI0LTY4NzJhN2FiMmEwNS9kZ2R0dHNmLTUzNDFhOWExLWM3NjUtNDg5Ny1hODg3LTYyYzlkZTI4ZDY3ZS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kpzANzO1fVSKNNv7QEfvwYJiFS-8nQgfc5NSLRVR6sg",
    alt: "Mobile banner 3",
  },
];

const cardImages = [
  {
    src: "https://i.pinimg.com/736x/82/55/03/8255033248d018b6c5f3d460b2deec16.jpg",
    alt: "Aloy top up",
  },
  {
    src: "https://i.pinimg.com/736x/26/a8/53/26a8534fb2d7063e6157af9513b219d9.jpg",
    alt: "Kagami top up",
  },
  {
    src: "https://i.pinimg.com/736x/49/91/e7/4991e797a8cff6d9e4a26500e50cc040.jpg",
    alt: "Chou top up",
  },
  {
    src: "https://i.pinimg.com/736x/49/91/e7/4991e797a8cff6d9e4a26500e50cc040.jpg",
    alt: "Layla top up",
  },
  {
    src: "https://i.pinimg.com/736x/49/91/e7/4991e797a8cff6d9e4a26500e50cc040.jpg",
    alt: "Lunox top up",
  },
  {
    src: "https://i.pinimg.com/736x/49/91/e7/4991e797a8cff6d9e4a26500e50cc040.jpg",
    alt: "Lesley top up",
  },
  {
    src: "https://i.pinimg.com/736x/49/91/e7/4991e797a8cff6d9e4a26500e50cc040.jpg",
    alt: "Kagura top up",
  },
  {
    src: "https://i.pinimg.com/736x/49/91/e7/4991e797a8cff6d9e4a26500e50cc040.jpg",
    alt: "Fanny top up",
  },
  {
    src: "https://i.pinimg.com/736x/49/91/e7/4991e797a8cff6d9e4a26500e50cc040.jpg",
    alt: "Angela top up",
  },
  {
    src: "https://i.pinimg.com/736x/49/91/e7/4991e797a8cff6d9e4a26500e50cc040.jpg",
    alt: "Ruby top up",
  },
  {
    src: "https://i.pinimg.com/736x/82/55/03/8255033248d018b6c5f3d460b2deec16.jpg",
    alt: "Miya top up",
  },
  {
    src: "https://i.pinimg.com/736x/82/55/03/8255033248d018b6c5f3d460b2deec16.jpg",
    alt: "Gusion top up",
  },

];

const currentBanner = ref(0);
const bannerCount = computed(() => banners.length);

const nextBanner = () => {
  currentBanner.value = (currentBanner.value + 1) % bannerCount.value;
};

const prevBanner = () => {
  currentBanner.value =
    (currentBanner.value - 1 + bannerCount.value) % bannerCount.value;
};

let bannerTimer;

onMounted(() => {
  bannerTimer = window.setInterval(nextBanner, 4000);
});

onUnmounted(() => {
  if (bannerTimer) {
    window.clearInterval(bannerTimer);
  }
});
</script>

<template>
  <div class="min-h-screen">
    <section class="mx-4 pt-4 sm:mx-6 md:mx-10">
      <div class="hidden overflow-hidden rounded-2xl shadow-lg lg:block">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop"
          alt="Game top-up banner"
          class="h-48 w-full object-cover md:h-56"
        />
      </div>

      <div class="banner-slider overflow-hidden rounded-2xl shadow-lg lg:hidden">
        <div
          class="banner-track"
          :style="{
            width: `${bannerCount * 100}%`,
            transform: `translateX(-${currentBanner * (100 / bannerCount)}%)`,
          }"
        >
          <img
            v-for="(banner, index) in banners"
            :key="`${banner.src}-${index}`"
            :src="banner.src"
            :alt="banner.alt"
            class="banner-item"
          />
        </div>

        <button
          type="button"
          class="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-sky-600 shadow-md backdrop-blur"
          aria-label="Previous banner"
          @click="prevBanner"
        >
          &lt;
        </button>
        <button
          type="button"
          class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-sky-600 shadow-md backdrop-blur"
          aria-label="Next banner"
          @click="nextBanner"
        >
          &gt;
        </button>
      </div>
    </section>
    <section class="my-2 p-2 "><h1 class="text-center">Well Come to Our Website </h1></section>
    <section class="mx-4 grid grid-cols-3 justify-items-center gap-3 sm:mx-6 md:mx-10 lg:grid-cols-6">
      <Card
        v-for="(card, index) in cardImages"
        :key="`${card.src}-${index}`"
        :image-src="card.src"
        :image-alt="card.alt"
      />
    </section>
  </div>
</template>

<style scoped>
.banner-slider {
  position: relative;
  height: 180px;
}

.banner-track {
  display: flex;
  height: 100%;
  transition: transform 0.6s ease;
}

.banner-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 640px) {
  .banner-slider {
    height: 200px;
  }
}
</style>