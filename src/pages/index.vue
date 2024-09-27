<template>
  <section class=" py-20">
    <h1 class=" text-center text-4xl/loose font-bold">REMOTE JOBS</h1>
    <p class=" text-center">
      <span v-if="loading"><i class='bx bx-loader bx-spin' ></i></span>
      <span v-else class=" text-2xl">{{ data['total-job-count'] }}</span>Jobs
    </p>
  </section>
  <section class="mb-20">
    <span v-if="loading"><i class='bx bx-loader bx-spin' ></i></span>
    <ul v-else class=" grid gap-4 w-11/12 mx-auto md:grid-cols-3">
      <li class="rounded-md bg-secondary/50 p-3 shadow-md self-start" v-for="item in data.jobs" :key="item.id">
        <h3 class="font-bold space-x-2">
          <span class=" inline-block align-middle">{{ item.title }}</span>
          <img loading="lazy" class="w-6 inline-block align-middle" :src="item.company_logo" alt="company logo">
        </h3>
        <p>{{ item.salary }}</p>
        <p>{{ formatTime(item.publication_date) }}</p>
        <p class=" space-x-2 space-y-2">
          <span class="rounded-md inline-block bg-secondary/60 px-1 text-xs" v-for="tag in item.tags">{{ tag }}</span>
        </p>
        <p class=" text-right">
          <a class=" bg-primary px-1 rounded-md" :href="item.url" target="_blank">View on remotive.com<i class='bx bx-link-external' ></i></a>
        </p>
      </li>
    </ul>
  </section>
  <section>
    <h2 class=" text-center text-4xl/loose font-bold">Category</h2>
    <p class=" text-center"><router-link class=" bg-primary inline-block p-2 rounded-md hover:bg-primary/80" to="/categories">View By Category</router-link></p>
  </section>
</template>

<script setup>
import useFetch from '../composables/useFetch'

const {
  data,
  loading
} = useFetch('?limit=3')

const formatTime = date => {
  const time = new Date(date)
  return new Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(time)
}
</script>