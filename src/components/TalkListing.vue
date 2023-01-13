<template>
    <div class="flex flex-col">
      <ListingItem  v-for="talk in talks" :key="talk.id" :url="talk.url">
        {{ talk.title }} <span class="text-sm font-medium ml-2 px-2.5 py-0.5 rounded bg-accent text-black text-uppercase">Upcoming</span>
        <template #sub>
          {{ talk.readable_date }}, 
        </template>
        <template #side>
          <img v-if="talk.source === 'devto'" src="/assets/devto.svg" width="30px" height="30px" alt="Article from Dev.to" class="ml-auto"/>
          <img v-if="talk.source === 'vueschool'" src="/assets/vueschool.png" width="30px" height="30px" alt="Article from Vue School" class="ml-auto"/>
        </template>
      </ListingItem>
    </div>
</template>

<script setup>
import ListingItem from './ListingItem.vue'

const props = defineProps(['talks'])
</script>