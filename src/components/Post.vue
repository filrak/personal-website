<template>
  <article class="group flex bg-primary-lighter items-center mb-5 border-b-4 border-primary-lightest transition ease-in-out hover:border-accent hover:text-white hover:bg-primary-lightest">
      <a class="w-3/4 p-5" :href="post.url">
        <h2 class="font-bold tracking-tight text-lg">
          {{ post.title }}
        </h2>
        {{ post.readable_publish_date }}
      </a>
    <div class="w-1/4 text-lg pr-5 opacity-60 group-hover:opacity-100">
      <img v-if="post.source === 'devto'" src="/assets/devto.svg" width="30px" height="30px" alt="Article from Dev.to" class="ml-auto"/>
      <img v-if="post.source === 'vueschool'" src="/assets/vueschool.png" width="30px" height="30px" alt="Article from Vue School" class="ml-auto"/>
    </div>
    </article>
</template>

<script setup>
const props = defineProps({
  post: Object
})
</script>