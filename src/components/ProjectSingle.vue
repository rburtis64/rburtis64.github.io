<template>
	<a :href="project.link" class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" aria-label="Single Project">
		<div>
			<img :src="project.img" :alt="project.title" class="rounded-t-xl border-none"/>
		</div>
		<div class="text-center px-4 py-6">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
				{{ project.title }}
			</p>
			<span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">
                {{ project.category }}
            </span>
			<p v-if="project.time" class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">
                {{ project.time }}
            </p>
			<el-divider border-style="dashed" />
			<span v-if="!project.technology" class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">
                *In Developement*
            </span>
			<span v-else class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">
                {{ project.technology }}
            </span>
		</div>
	</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectSingle',
  props: ['project'],
  });
</script>

<style lang="scss" scoped></style>
