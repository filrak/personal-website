<template>
    <div class="flex flex-col">
      <Post v-for="post in posts" :key="post.id" :post="post"/>
    </div>
</template>

<script setup>
import Post from './Post.vue'

const props = defineProps(['posts'])
console.log(props)
</script>