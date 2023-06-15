<template>
  <div class="main">
    <HeaderComponent :favoriteList="getFavoriteComics" />
    <MainSliderComponent
      v-for="(section, index) in sections"
      :key="index"
      :topic="section.topic"
      :thumbLarge="section.thumbLarge"
      :comics="comics.slice(section.startIndex, section.endIndex)"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainSliderComponent from "@/components/MainSliderComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    MainSliderComponent,
  },
  computed: {
    ...mapGetters({
      comics: "getComics",
      getFavoriteComics: "getFavoriteComics",
    }),
  },
  created() {
    this.fetchComics();
    this.getFavorites();
  },
  data() {
    return {
      sections: [
        {
          topic: "NETFLIX ORIGINALS",
          thumbLarge: true,
          startIndex: 0,
          endIndex: 8,
        },
        {
          topic: "Trending Now",
          thumbLarge: false,
          startIndex: 8,
          endIndex: 16,
        },
        { topic: "Top Rated", thumbLarge: false, startIndex: 16, endIndex: 24 },
        {
          topic: "Action Movies",
          thumbLarge: false,
          startIndex: 24,
          endIndex: 32,
        },
        {
          topic: "Comedy Movies",
          thumbLarge: false,
          startIndex: 32,
          endIndex: 40,
        },
        {
          topic: "Horror Movies",
          thumbLarge: false,
          startIndex: 40,
          endIndex: 48,
        },
        {
          topic: "Romance Movies",
          thumbLarge: false,
          startIndex: 48,
          endIndex: 56,
        },
        {
          topic: "Documentaries",
          thumbLarge: false,
          startIndex: 56,
          endIndex: 64,
        },
      ],
    };
  },
  methods: {
    ...mapActions(["fetchComics", "getFavorites"]),
  },
};
</script>
