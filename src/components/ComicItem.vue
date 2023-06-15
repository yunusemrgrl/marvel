<template>
  <div class="comic-item">
    <AddFavorite :id="comic.id" />
    <img
      @click="navigateToDetail"
      class="img"
      :class="thumbLarge ? 'img-large' : ''"
      :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
      :alt="comic.title"
    />
    <div class="details">
      <h3 class="title" :class="{ 'show-tooltip': showTooltip }">
        {{ showTooltip ? comic.title : truncateText(comic.title || "", 30) }}
      </h3>
      <p
        class="description"
        @mouseover="showTooltip = true"
        @mouseleave="showTooltip = false"
        :class="{ 'show-tooltip': showTooltip }"
        v-html="
          showTooltip
            ? comic.description
            : truncateText(comic.description || '', 100)
        "
      ></p>
    </div>
  </div>
</template>

<script>
import AddFavorite from "./AddFavorite.vue";

export default {
  name: "ComicItem",
  components: { AddFavorite },
  props: {
    comic: Object,
    thumbLarge: Boolean,
  },
  data() {
    return {
      showTooltip: false,
    };
  },
  mounted() {},
  methods: {
    truncateText(text, limit) {
      if (text && text.length <= limit) {
        return text;
      }
      return text ? text.substring(0, limit) + "..." : "";
    },
    navigateToDetail() {
      this.$router.push("/comic/" + this.comic.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.img {
  &:hover {
    transform: scale(1.08);
  }

  aspect-ratio: 16/9;
  max-height: 150px;
  margin-right: 10px;
  transition: transform 450ms;
  cursor: pointer;
}
.comic-item {
  position: relative;
  .img-large {
    max-height: 250px;

    &:hover {
      transform: scale(1.09);
    }
  }

  .details {
    margin-top: 10px;
    font-weight: bold;

    .title {
      font-size: 16px;
      margin-bottom: 5px;
      padding: 5px;
      color: $quaternary-text;
      transition: max-height 450ms;
    }

    .description {
      font-size: 14px;
      padding: 5px;
      max-height: 80px;
      color: $tertiary-text;
      overflow-y: hidden;
      transition: max-height 450ms;
    }
    .description.show-tooltip {
      max-height: 120px;
      overflow-y: scroll;
    }

    .description.show-tooltip::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
