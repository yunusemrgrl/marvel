<template>
  <div>
    <img
      class="img"
      :class="thumbLarge ? 'img-large' : ''"
      :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
      :alt="comic.title"
    />
    <div class="details">
      <h3 class="title">
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
export default {
  name: "ComicItem",
  props: {
    comic: Object,
    thumbLarge: Boolean,
  },
  data() {
    return {
      showTooltip: false,
    };
  },
  mounted() {
    console.log(this.thumbLarge);
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

<style scoped>
.img {
  &:hover {
    transform: scale(1.08);
  }

  aspect-ratio: 16/9;
  max-height: 100px;
  margin-right: 10px;
  transition: transform 450ms;
}
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
    font-size: 18px;
    margin-bottom: 5px;
    padding: 5px;
    font-size: 16px;
    color: #ddd;
  }

  .description {
    font-size: 14px;
    padding: 5px;
    max-height: 80px;
    color: #888;
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
</style>
