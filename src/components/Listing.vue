<template>
    <div class="flex flex-col">
      <Post v-for="post in posts" :key="post.id" :post="post"/>
    </div>
</template>

<script setup>
import Post from './Post.vue'
import { ref } from 'vue'
import { getPosts } from '../services/getPosts'

const posts = ref({})

posts.value = await getPosts()
</script>