<template>
    <article class="group flex bg-primary-lighter items-center mb-5 border-b-4 border-primary-lightest transition ease-in-out hover:border-accent hover:text-white hover:bg-primary-lightest">
        <a class="p-5" :href="url">
          <h2 class="font-bold tracking-tight text-lg">
            <slot />
          </h2>
          <slot name="sub"></slot>
        </a>
      <div class="w-1/4 text-lg pr-5 opacity-60 group-hover:opacity-100">
        <slot name="side"></slot>
      </div>
      </article>
  </template>
  
  <script setup>
  const props = defineProps(['url'])
  </script>