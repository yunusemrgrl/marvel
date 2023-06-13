<template>
  <header class="banner">
    <div class="banner__content">
      <p class="banner__content__title">Money Heist</p>
      <div class="banner__content__buttons">
        <button class="banner__content__button">Play</button>
        <button class="banner__content__button">My List</button>
      </div>
      <p class="banner__content__description">
        To carry out the biggest heist in history, a mysterious man called The
        Professor recruits a band of eight robbers who have a single
        characteristic: n...
      </p>
    </div>
    <div class="banner--fadeBottom"></div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {},
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  background-image: url("../assets/banner.jpg");
  background-size: cover;
  background-position: center center;
  color: white;
  object-fit: contain;
  width: 100%;
  height: 448px;

  &__content {
    position: absolute;
    left: 30px;
    bottom: 145px;

    &__title {
      margin: 0;
      font-family: Arial;
      font-size: 48px;
      font-weight: 800;
      padding: 0 0 4px;
    }

    &__buttons {
      button {
        background-color: rgba(51, 51, 51, 0.5);
        outline: 0;
        border: 0;
        border-radius: 3px;
        color: #ffffff;
        font-size: 13px;
        font-weight: 700;
        margin-right: 16px;
        padding: 8px 32px;
        text-align: center;

        &:hover {
          color: #000;
          background-color: #e6e6e6;
          transition: all 0.2s;
        }
      }
    }

    &__description {
      color: #ffffff;
      font-family: Arial;
      font-size: 13px;
      font-weight: 700;
      line-height: 17px;
      padding: 16px 0 0;
      max-width: 360px;
    }
  }

  &--fadeBottom {
    height: 118px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
</style>
