<template>
  <div class="main">
    <HeaderComponent />
    <MainSliderComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainSliderComponent from "@/components/MainSliderComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    MainSliderComponent,
  },
};
</script>
