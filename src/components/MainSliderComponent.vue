<template>
  <div class="slider">
    <h2 class="title">{{ title }}</h2>
    <div class="posters">
      <img
        class="poster"
        :class="thumbLarge ? 'poster-large' : ''"
        src="../assets/small-movie3.jpg"
        alt=""
        v-for="index in 8"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSliderComponent",
  props: {
    title: String,
    thumbLarge: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.slider {
  color: white;
  margin-left: 20px;

  .title {
  }

  .posters {
    &::-webkit-scrollbar {
      display: none;
    }

    display: flex;
    justify-content: space-between;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    -ms-overflow-style: none;

    .poster {
      &-large {
        max-height: 250px;
        &:hover {
          transform: scale(1.09);
        }
      }
      aspect-ratio: 16/9;
      max-height: 100px;
      margin-right: 10px;
      transition: transform 450ms;

      &:hover {
        transform: scale(1.08);
      }
    }
  }
}
</style>
