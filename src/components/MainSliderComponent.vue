<template>
  <div class="slider">
    <h2 class="slider__title">NETFLIX ORIGINALS</h2>
    <div class="slider__posters">
      <img
        class="slider__posters__poster slider__posters__poster--large"
        src="../assets/small-movie3.jpg"
        alt=""
      />
      <img
        class="slider__posters__poster slider__posters__poster--large"
        src="../assets/small-movie3.jpg"
        alt=""
      />
      <img
        class="slider__posters__poster slider__posters__poster--large"
        src="../assets/small-movie3.jpg"
        alt=""
      />
      <img
        class="slider__posters__poster slider__posters__poster--large"
        src="../assets/small-movie3.jpg"
        alt=""
      />
      <img
        class="slider__posters__poster slider__posters__poster--large"
        src="../assets/small-movie3.jpg"
        alt=""
      />
      <img
        class="slider__posters__poster slider__posters__poster--large"
        src="../assets/small-movie3.jpg"
        alt=""
      />
      <img
        class="slider__posters__poster slider__posters__poster--large"
        src="../assets/small-movie3.jpg"
        alt=""
      />
      <img
        class="slider__posters__poster slider__posters__poster--large"
        src="../assets/small-movie3.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSliderComponent",
  props: {},
};
</script>

<style lang="scss">
.slider {
  color: white;
  margin-left: 20px;

  &__title {
    margin-left: 20px;
  }

  &__posters {
    &::-webkit-scrollbar {
      display: none;
    }

    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    -ms-overflow-style: none;

    &__poster {
      &--large {
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
