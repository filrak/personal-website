<template>
    <div class="flex flex-col">
      <ListingItem  v-for="post in posts" :key="post.id" :url="post.url">
        {{ post.title }}
        <template #sub>
          {{ post.readable_date }}
        </template>
        <template #side>
          <img v-if="post.source === 'devto'" src="/assets/devto.svg" width="30px" height="30px" alt="Article from Dev.to" class="ml-auto"/>
          <img v-if="post.source === 'vueschool'" src="/assets/vueschool.png" width="30px" height="30px" alt="Article from Vue School" class="ml-auto"/>
        </template>
      </ListingItem>
    </div>
</template>

<script setup>
import ListingItem from './ListingItem.vue'

const props = defineProps(['posts'])
</script>