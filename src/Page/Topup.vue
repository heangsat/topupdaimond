

<template>
    <Header />
  <div class="min-h-screen bg-pink-50 p-4 md:p-8">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
      
      <aside class="w-full md:w-1/4 bg-white rounded-2xl p-6 shadow-sm self-start">
        <div class="flex flex-col items-center text-center">
          <img src="https://i.pinimg.com/736x/f0/13/f2/f013f20502ca04241885bfe292e1f220.jpg" alt="MLBB" class="w-24 h-24 rounded-2xl mb-4 shadow-md" />
          <h1 class="text-2xl font-bold text-pink-600 mb-2">Mobile Legend</h1>
          <div class="flex gap-2 mb-4">
            <span class="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded">Fast</span>
            <span class="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">Secure</span>
          </div>
          <p class="text-sm text-gray-500 leading-relaxed">
            Enter your User ID and Zone ID to top up your diamonds instantly.
          </p>
        </div>
      </aside>

      <main class="w-full md:w-3/4 space-y-6">
        
        <section class="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-pink-500">
          <h2 class="text-lg font-bold mb-4 flex items-center gap-2">
            <span class="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
            Enter User Info
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="User ID" class="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none" />
            <input type="text" placeholder="Zone ID" class="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none" />
            <div>
                 <button class="p-2 rounded-xl border-gray-400 bg-sky-100 cursor-pointer hover:bg-pink-300 ">Check Name</button>
            </div>
           
          </div>
        </section>

        <section class="bg-white rounded-2xl p-6 shadow-sm">
          <h2 class="text-lg font-bold mb-4 flex items-center gap-2">
            <span class="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
            Select Diamonds
          </h2>
          
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div 
              v-for="pkg in diamondPackages" 
              :key="pkg.id"
              @click="selectPackage(pkg.id)"
              :class="[
                'relative p-4 border-2 rounded-xl cursor-pointer transition-all flex flex-col items-center justify-center gap-2 text-center',
                selectedPackageId === pkg.id ? 'border-pink-500 bg-pink-50' : 'border-gray-100 hover:border-pink-200'
              ]"
            >
              <img :src="pkg.image" alt="diamonds" class="w-12 h-12 object-contain" />
              <div class="text-sm font-semibold text-gray-800">{{ pkg.amount }} Diamonds</div>
              <div class="text-sm font-bold text-orange-500">{{ pkg.price }}$</div>
              
              <div v-if="selectedPackageId === pkg.id" class="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full p-1 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <!-- Payment  -->
        <section class="bg-white rounded-2xl p-6 shadow-sm mt-6">
    <h2 class="text-lg font-bold mb-4 flex items-center gap-2">
      <span class="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
      រើសវិធីបង់ប្រាក់ (Select Payment)
    </h2>

    <div class="space-y-3">
      <label v-for="method in paymentMethods" :key="method.id" class="relative block cursor-pointer">
        <input 
          type="radio" 
          name="payment" 
          :value="method.id" 
          v-model="selectedPayment" 
          class="peer sr-only" 
        />

        <div :class="[
          'flex items-center justify-between p-4 rounded-xl border-2 transition-all',
          'peer-checked:border-pink-500 peer-checked:bg-pink-50 border-gray-100 hover:border-pink-200'
        ]">
          <div class="flex items-center gap-4">
            <div :class="['w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden shadow-inner', method.color]">
              <img :src="method.logo" :alt="method.name" class="w-8 h-8 object-contain" />
            </div>
            
            <div>
              <div class="font-bold text-gray-800">{{ method.name }}</div>
              <div class="text-xs text-gray-500">{{ method.description }}</div>
            </div>
          </div>

          <div class="w-6 h-6 rounded-xl border-2 border-gray-300 flex items-center justify-center peer-checked:border-pink-500">
            <div v-if="selectedPayment === method.id" class="w-3 h-3 bg-pink-500 rounded-full"></div>
          </div>
        </div>
      </label>
    </div>

    <div class="mt-6 border-t pt-4">
      <div class="flex items-start gap-2 mb-4">
        <input type="checkbox" id="terms" class="mt-1 accent-pink-500" />
        <label for="terms" class="text-sm text-gray-600">
          ខ្ញុំយល់ព្រមតាម <span class="text-pink-500 font-bold underline cursor-pointer">លក្ខខណ្ឌ</span>
        </label>
      </div>

      <div class="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
        <div class="text-sm text-gray-500">សរុប: <span class="text-blue-500">💎 {{ selectedAmount }}</span></div>
        <button class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          ទិញឥឡូវនេះ: {{ selectedPrice }}$
        </button>
      </div>
    </div>
  </section>
      </main>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { computed, ref } from 'vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
const selectedPayment = ref('aba') // Default selection

const paymentMethods = [
  { 
    id: 'aba', 
    name: 'ABA PAY', 
    description: 'Scan to pay with ABA Mobile', 
    logo: 'data:image/jpeg;base64,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', // Replace with your actual path
    color: 'bg-[#005a71]' // ABA brand color
  },
  { 
    id: 'khqr', 
    name: 'KHQR', 
    description: 'Scan to pay with any banking app', 
    logo: 'data:image/png;base64,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',
    color: 'bg-[#e61b2e]' // KHQR brand color
  }
]
const selectedPackageId = ref(null)

const selectPackage = (packageId) => {
  selectedPackageId.value = packageId
}

const selectedPackage = computed(() => {
  return diamondPackages.value.find((pkg) => pkg.id === selectedPackageId.value) || null
})

const selectedAmount = computed(() => selectedPackage.value?.amount ?? 0)
const selectedPrice = computed(() => selectedPackage.value?.price ?? '0.00')

// You can fetch this from your MySQL/Drizzle backend later
const diamondPackages = ref([
  { id: 1, amount: 86, price: '1.32', image: 'https://i.pinimg.com/1200x/f3/c5/16/f3c5168088559c76f4f9b41e41e7711c.jpg' },
  { id: 2, amount: 172, price: '2.64', image: 'https://i.pinimg.com/1200x/f3/c5/16/f3c5168088559c76f4f9b41e41e7711c.jpg' },
  { id: 3, amount: 257, price: '3.96', image: 'https://i.pinimg.com/1200x/f3/c5/16/f3c5168088559c76f4f9b41e41e7711c.jpg' },
  { id: 4, amount: 344, price: '5.28', image: 'https://i.pinimg.com/1200x/f3/c5/16/f3c5168088559c76f4f9b41e41e7711c.jpg' },
  { id: 5, amount: 429, price: '6.60', image: 'https://i.pinimg.com/1200x/f3/c5/16/f3c5168088559c76f4f9b41e41e7711c.jpg' },
  { id: 6, amount: 514, price: '7.92', image: 'https://i.pinimg.com/1200x/f3/c5/16/f3c5168088559c76f4f9b41e41e7711c.jpg' },
  { id: 7, amount: 600, price: '9.24', image: 'https://i.pinimg.com/1200x/f3/c5/16/f3c5168088559c76f4f9b41e41e7711c.jpg' },
  { id: 8, amount: 706, price: '10.56', image: 'https://i.pinimg.com/1200x/f3/c5/16/f3c5168088559c76f4f9b41e41e7711c.jpg' },
  { id: 9, amount: 878, price: '13.20', image: 'https://i.pinimg.com/1200x/f3/c5/16/f3c5168088559c76f4f9b41e41e7711c.jpg' },
  { id: 10, amount: 963, price: '14.52', image: 'https://i.pinimg.com/1200x/f3/c5/16/f3c5168088559c76f4f9b41e41e7711c.jpg' },
  { id: 11, amount: 1050, price: '15.84', image: 'https://i.pinimg.com/1200x/f3/c5/16/f3c5168088559c76f4f9b41e41e7711c.jpg' },
  // ... add more items
])
</script>