<template>
	<div class="container mx-auto">
		<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center p-5">
			<p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
				Projects Portfolio
			</p>
		</div>

		<!-- Projects grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
			<ProjectSingle v-for="project in projects" :key="project.id" :project="project"/>
		</div>
	</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectSingle from '@/components/ProjectSingle.vue';

export default defineComponent({
  name: 'ProjectsView',
  components: { ProjectSingle },
  data() {
    return {
            projects: [
                        {
                            id: 1,
                            title: 'Illumicare',
                            category: 'Internal Tools Application',
                            time: 'Nov 2020 - Apr 2023',
                            discription: 'I was responsible for developing internal tools and applications that helped manage hospital and healthcare industry data used in customer-based applications. I played a key role in weekly releases of Vue applications to the production environment and successfully migrated our internal tools system from Vue 2 to Vue 3 in 2023. I was also focused on continuous process improvements, including bug fixes and updates.',
                            technology: 'JavaScript, Vue.js, Webpack, Node,js, C#, .NET 6, MySQL, Element Plus, Vuestic, NodeJS, Semantic UI Vue, and Bootstrap',
                            img: 'src/assets/img/projects/illumicare.jpg',
                            link: 'https://illumicare.com/',
                        },
                        {
                            id: 2,
                            title: 'Personal Unity Project',
                            category: 'Gaming Application',
                            time: '',
                            discription: '',
                            technology: '',
                            img: 'src/assets/img/projects/unity-engine.jpg',
                            link: '',
                        },
                        {
                            id: 3,
                            title: 'UAB Projects Remodel',
                            category: 'Web/Mobile Application',
                            time: '',
                            discription: '',
                            technology: '',
                            img: 'src/assets/img/projects/Update.jpg',
                            link: '',
                        },
                        {
                            id: 4,
                            title: 'UAB Capstone Project - Smart Home',
                            category: 'Web/Mobile Application',
                            time: '',
                            discription: 'My UAB Capstone group project where we were tasked to create a smart home application that controls the smart applications existing within the home and show a history of using including monthly water and electricity usage.',
                            technology: 'HTML, CSS, React, JavaScript, postgreSQL, Bootstrap, Git, GitHub',
                            img: 'src/assets/img/projects/smart_home2.jpg',
                            link: 'https://github.com/rburtis64/Smart-Home-App',
                        },
                        {
                            id: 5,
                            title: 'UAB Cloud Computing Project: News Outlet',
                            category: 'Web Application',
                            time: '',
                            discription: 'A web application that uses the News API to allow users to view recent news articles from certain sites all in one location.',
                            technology: 'HTML, CSS, JavaScript, Bootstrap, News API, Git, GitHub',
                            img: 'src/assets/img/projects/news_outlet.jpg',
                            link: 'https://github.com/rburtis64/News_Outlet',
                        },
                        {
                            id: 6,
                            title: 'UAB Advanced Web App: Anyone Can Cook!!',
                            category: 'Web Application',
                            time: '',
                            discription: 'Even with a fridge full of ingredients, it can be difficult to know what to make when you don’t have a plan. “Anyone Can Cook” attempts to relieve the stress of trying to figure out what to do with what you have on hand. “Anyone Can Cook” allows the user to input the ingredients they have, and provides a recipe based on those ingredients. Users can also create a profile to store their favorites.',
                            technology: 'HTML, CSS, Python, SQLAlchemy, jquery, Bootstrap, Git, GitHub, Django',
                            img: 'src/assets/img/projects/Anyone_Can_Cook.jpg',
                            link: 'https://github.com/rburtis64/ACC-Recipe',
                        },
                    ]
		};
  },
});
</script>

<style lang="scss" scoped></style>