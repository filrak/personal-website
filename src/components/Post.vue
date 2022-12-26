<template>
  <article class="flex bg-primary-lighter items-center mb-5 border-b-4 border-primary-lightest transition ease-in-out hover:border-accent hover:text-accent">
    <div class="w-3/4 p-5">
      <a :href="post.url">
      <h2 class="font-bold tracking-tight text-lg">
        {{ post.title }}
      </h2>
      {{ post.readable_publish_date }}
      </a>
    </div>
    <div class="w-1/4 text-lg pr-5">
      <img src="/assets/devto.svg" width="30px" height="30px" alt="Follow me on Linkedin" class="ml-auto"/>
    </div>
    </article>
</template>

<script setup>
const props = defineProps({
  post: Object
})
</script>