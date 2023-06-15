<template>
  <header class="banner">
    <div class="banner__content">
      <p class="banner__content__title">Money Heist</p>
      <div class="banner__content__buttons">
        <button class="banner__content__button">Play</button>
        <button class="banner__content__button">
          My List <span>{{ favoriteList?.length }}</span>
        </button>
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
  props: {
    favoriteList: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.banner {
  position: relative;
  background-image: url("../assets/banner.jpg");
  background-size: cover;
  background-position: center center;
  object-fit: contain;
  width: 100%;
  height: 448px;

  &__content {
    position: absolute;
    left: 30px;
    bottom: 145px;

    &__title {
      margin: 0;
      font-size: 48px;
      font-weight: 800;
      padding: 0 0 4px;
    }

    &__buttons {
      button {
        background-color: rgba($secondary-bg, 0.5);
        border-radius: 3px;
        font-size: 13px;
        font-weight: 700;
        margin-right: 16px;
        padding: 8px 32px;
        text-align: center;
        color: $light-text;

        > span {
          display: inline-block;
          text-align: center;
          margin-left: 8px;
          padding: 2px 6px;
          border-radius: 50%;
          background-color: red;
          color: $light-text;
        }

        &:hover {
          color: $primary-text;
          cursor: pointer;
          background-color: #e6e6e6;
          transition: all 0.6s;
        }
      }
    }

    &__description {
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
      $primary-bg
    );
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
</style>
