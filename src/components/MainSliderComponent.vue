<template>
  <div class="slider">
    <h2 class="topic">{{ topic }}</h2>
    <div class="posters">
      <ComicItem
        v-for="comic in comics"
        :key="comic.id"
        :comic="comic"
        :thumbLarge="thumbLarge"
      />
    </div>
  </div>
</template>

<script>
import ComicItem from "./ComicItem.vue";

export default {
  name: "MainSliderComponent",
  components: { ComicItem },
  props: {
    topic: String,
    thumbLarge: Boolean,
    comics: Array,
  },
  data() {
    return {
      showTooltip: false,
    };
  },
  methods: {
    truncateText(text, limit) {
      if (text && text.length <= limit) {
        return text;
      }
      return text ? text.substring(0, limit) + "..." : "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.slider {
  color: $quaternary-text;
  margin-left: 20px;

  .posters {
    &::-webkit-scrollbar {
      display: none;
    }

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    -ms-overflow-style: none;
  }
}
</style>
