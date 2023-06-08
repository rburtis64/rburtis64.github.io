<template>
  <div class="container mx-auto">
		<div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<!-- Footer social links -->
			<div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
				<p class="font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5">
					Follow me
				</p>
				<ul class="flex gap-4 sm:gap-8">
					<a v-for="social in socials" :key="social.id" :href="social.url" target="__blank" class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500">
						<font-awesome-icon :icon="social.icon" class="w-5 sm:w-8 h-5 sm:h-8" />
					</a>
				</ul>
			</div>


    <div class="flex justify-center items-center text-center">
      <div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {{ copyrightDate }}.
        <a href="https://github.com/rburtis64/rburtis64.github.io" target="__blank" class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500">
            {{ projectName }}.
        </a>
        Developed by Ryan Burtis
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterView',
  components: { },
  data() {
    return {
              socials: [
                        {
                        id: 1,
                        name: 'GitHub',
                        icon: 'fa-brands fa-github',
                        url: 'https://github.com/rburtis64',
                        },
                        {
                          id: 2,
                          name: 'Facebook',
                          icon: 'fa-brands fa-facebook',
                          url: 'https://www.facebook.com/ryan.burtis.5/',
                        },
                        {
                          id: 3,
                          name: 'LinkedIn',
                          icon: 'fa-brands fa-linkedin',
                          url: 'https://www.linkedin.com/in/ryan-burtis/',
                        }
                    ],
              copyrightDate: new Date().getFullYear(),
              projectName: 'Vue.js & Tailwind CSS Portfolio',
              author: 'Ryan',
            };
  },
});
</script>

<style lang="scss" scoped></style>