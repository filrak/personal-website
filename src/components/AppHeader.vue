<template>
    <header class="bg-primary-lighter sticky top-0 left-0">
        <nav class="container mx-auto flex">
            <ul class="inline-flex w-1/2 text-lg">
                <li class="">
                    <a  href="/" class="px-5 py-3 font-bold border-b-2 border-primary-lighter hover:border-b-2 hover:border-accent hover:text-white inline-flex">
                        Home
                    </a>
                </li>
                <li class="">
                    <a href="/posts" class="px-5 py-3 font-bold border-b-2 border-primary-lighter hover:border-b-2 hover:border-accent hover:text-white inline-flex">
                        Writing
                    </a>
                </li>
                <li class="">
                    <a href="/speaking" class="px-5 py-3 font-bold border-b-2 border-primary-lighter hover:border-b-2 hover:border-accent hover:text-white inline-flex">
                        Speaking
                    </a>
                </li>
                <li class="">
                    <a href="/about" class="px-5 py-3 font-bold border-b-2 border-primary-lighter hover:border-b-2 hover:border-accent hover:text-white inline-flex">
                        About me
                    </a>
                </li>
            </ul>
            <ul class="inline-flex flex-row-reverse w-1/2 items-center">
                <li class="px-5 py-3">
                  <img src="/assets/twitter.svg" width="18px" height="18px" alt="Follow me on Twitter">
                </li>
                <li class="px-5 py-3">
                  <img src="/assets/linkedin.svg" width="18px" height="18px" alt="Follow me on Linkedin">
                </li>
            </ul>
        </nav>
    </header>
</template>