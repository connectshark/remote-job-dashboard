<template>
  <p class=" text-center" v-if="loading"><i class='bx bx-loader bx-spin' ></i></p>
  <div v-else-if="data['job-count'] <= 0">Empty</div>
  <ul v-else class="px-1 mx-auto grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4">
    <li v-for="item in data.jobs">
      <router-link :style="`background-image: url('/img/${ item.slug }.jpg');`" class="flex flex-col justify-end items-center aspect-square hover:rounded-xl text-center py-3 bg-primary bg-center bg-no-repeat bg-cover" :to="`/category/${ item.slug }`">
        <span class="inline-block backdrop-brightness backdrop-brightness-50 backdrop-blur-md text-background  p-3 rounded-xl">{{ item.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import useFetch from '../composables/useFetch'

const {
  data,
  loading
} = useFetch('/categories')
</script>