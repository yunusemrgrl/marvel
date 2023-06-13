<template>
  <div class="main">
    <HeaderComponent />
    <MainSliderComponent title="NETFLİX ORIGINALS" :thumbLarge="true" />
    <MainSliderComponent title="Trending Now" />
    <MainSliderComponent title="Top Rated" />
    <MainSliderComponent title="Action Movies" />
    <MainSliderComponent title="Comedy Movies" />
    <MainSliderComponent title="Horror Movies" />
    <MainSliderComponent title="Romance Movies" />
    <MainSliderComponent title="Documentaries" />
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
