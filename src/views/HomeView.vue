<script setup lang="ts">
import AboutView from './AboutView.vue';
import ProjectsView from './ProjectsView.vue';
import FooterView from './FooterView.vue';
import HeaderView from './HeaderView.vue';
</script>

<template>
  <main>
    <div class="p-5 container mx-auto">
      <div><HeaderView /></div>
      <div class="mb-5 sm:mb-8">
        <section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
          <!-- Banner left contents -->
          <div class="w-full md:w-1/3 text-left">
            <h1 class="text-3xl xl:text-4xl text-center sm:text-left uppercase">
              Hi, I am Ryan Burtis
            </h1>
            <p class="mt-2 text-lg xl:text-2xl text-center sm:text-left leading-none text-gray-400">
              A Full-Stack Developer
            </p>
            <div class="flex justify-center sm:block">
              <a download="Burtis-Resume.docx" href="/documents/Resume 2023.docx" class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500" aria-label="Download Resume">
                <font-awesome-icon icon="fa-solid fa-download" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100" />
                <span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
              </a>
            </div>
          </div>

          <!-- Banner right illustration -->
          <div class="w-full md:w-2/3 text-right float-right">
            <img src="@/assets/img/developer.svg" alt="Developer"/>
          </div>
	      </section>
      </div>
      <div><AboutView /></div>
      <div><ProjectsView /></div>
      <div><FooterView /></div>
    </div>
  </main>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
