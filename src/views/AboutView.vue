<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/img/me/full_body_photo.jpg" class="rounded-xl w-96" alt=""/>
    </div>

    <div class="w-full sm:w-3/4 text-left">
      <p class="font-general-regular mb-4 text-lg">
        Hello, my name is Ryan Burtis, and I am a Mid-level software developer and a proud graduate of the University of Alabama at Birmingham.
        Currently, I am actively seeking a position in software development.I possess a strong background in various technologies,
        including JavaScript, Vue.js, C#, .NET, MySQL, and working with frameworks such as Element Plus, Vuestic, NodeJS, Semantic UI Vue, and Bootstrap.
        Apart from my professional pursuits, I indulge in gaming software development using Unity and Unreal Engine 4/5. I find great joy in creating
        captivating gaming environments. In my previous role at Illumicare.Inc, I was responsible for developing internal tools and applications that
        facilitated the management of data in the hospital and healthcare industry, supporting customer-based applications. Additionally, I played a
        key role in the weekly release of Vue applications to the production environment. In 2023, I successfully led the migration of our internal
        tools system from Vue 2 to Vue 3, involving significant changes to our frameworks and necessitating replacements for a few components.
        I also prioritized continuous process improvements for the internal tools applications, which encompassed bug fixes and updates.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectView',
  components: { },
  data() {
    return {};
  },
});
</script>

