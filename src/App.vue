<template>
  <header>
    <div class="w-11/12 mx-auto py-4 flex items-center justify-between">
      <router-link to="/" class="flex items-center gap-2">
        <img class="w-10 rounded-3xl" src="./assets/logo.png" alt="logo">
        <span>{{ SITE_TITLE }}</span>
      </router-link>

      <details class="relative" v-clickOutside>
        <summary class="list-none p-2 rounded-md hover:bg-gray-200 cursor-pointer">pages</summary>
        <ul ref="list" class="bg-white absolute right-0 rounded-lg shadow-xl w-48 overflow-hidden">
          <li v-for="page in pages" class="border-b border-gray-200 last:border-none">
            <router-link class="p-4 hover:bg-gray-200 block text-sm/loose" :to="page.url">{{ page.name }}</router-link>
          </li>
        </ul>
      </details>
    </div>
  </header>
  <main class="mb-20">
    <router-view />
  </main>
  <footer class="text-text/80">
    <div class="mx-auto grid w-11/12 gap-8 md:grid-cols-3">
      <div>
        <h4 class="mb-4">
          <router-link to="/" class="grayscale hover:grayscale-0 flex items-center gap-2 w-fit">
            <img class="w-10 rounded-3xl" src="./assets/logo.png" alt="logo">
            <span>{{ SITE_TITLE }}</span>
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
    <h6 class="text-xs text-center pb-10">Copyright <i class='bx bx-copyright'/> 2024 <router-link class=" hover:underline" to="/">{{ SITE_TITLE }}</router-link> <a class=" underline" href="https://github.com/connectshark/remote-job-dashboard?tab=License-1-ov-file" target="_blank">CC-BY-SA-4.0</a> License.</h6>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const SITE_TITLE = import.meta.env.VITE_SITE_TITLE

const brands = ref([])

const list = ref(null)

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

const vClickOutside = {
  beforeMount (el) {
    el.clickOutsideEvent = (event) => {
      if (list.value.contains(event.target)) {
        el.open = false
        return
      }
      if (!el.open || el.contains(event.target)) return
      el.open = false
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted (el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>
