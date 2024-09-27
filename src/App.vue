<template>
  <header>
    <div class="w-11/12 mx-auto py-4">
      <router-link to="/" class="flex items-center gap-2">
        <img class="w-10 rounded-3xl" src="./assets/logo.png" alt="logo">
        <span>REMOTE JOBs</span>
      </router-link>
    </div>
  </header>
  <main class="mb-10">
    <router-view />
  </main>
  <footer class=" text-text/80">
    <div class="mx-auto grid w-11/12 gap-8">
      <div>
        <h4 class="mb-4">
          <router-link to="/" class="grayscale hover:grayscale-0 flex items-center gap-2 w-fit">
            <img class="w-10 rounded-3xl" src="./assets/logo.png" alt="logo">
            <span>REMOTE JOBs</span>
          </router-link>
        </h4>
        <p>
          <a class="px-2 py-1 rounded-2xl hover:bg-text/5 inline-block" href="mailto:bobhus394@gmail.com">
            <i class='bx bxl-gmail bx-sm inline-block align-middle'></i>
          </a>
        </p>
      </div>
      <nav>
        <h5 class="mb-4"><i class='bx bx-bookmark'></i>Pages</h5>
        <ul>
          <li class="mb-2 last:mb-0" v-for="item in pages">
            <router-link class=" text-xs hover:underline" :to="item.url">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
      <nav>
        <h5 class="mb-4"><i class="bx bx-cube-alt"></i>Brands</h5>
        <ul>
          <li class="mb-2 last:mb-0" v-for="item in brands">
            <a class=" text-xs hover:underline" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.name }}<i class='bx bx-link-external' ></i></a>
          </li>
        </ul>
      </nav>
    </div>
    <p class=" text-center py-10">
      <a class="px-2 py-1 rounded-2xl hover:bg-text/5 inline-block" href="https://github.com/connectshark/py-kfc-coupon" target="_blank">
        <i class='bx bxl-github bx-sm inline-block align-middle'></i>
      </a>
    </p>
    <h6 class="text-xs text-center pb-10">Copyright <i class='bx bx-copyright'/> 2024 CC-BY-SA-4.0 License.</h6>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const brands = ref([])

const fetchBrands = async () => {
  const fetch_response = await fetch('/brands.json')
  const data = await fetch_response.json()
  brands.value = data
}

fetchBrands()

const pages = [
  {
    url: '/categories',
    name: 'categories'
  }
]
</script>
