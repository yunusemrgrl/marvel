<template>
  <nav :class="{ scrolled: isScrolled }">
    <router-link to="/">
      <img
        src="../src/assets/netflix-logo.png"
        alt="netflix-logo"
        class="netflix-logo"
        @click="$router.push('/')"
      />
    </router-link>
    <router-link to="/">
      <img
        src="../src/assets/netflix-avatar.png"
        alt="netflix-avatar"
        class="netflix-avatar"
      />
    </router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isScrolled = scrollPosition > 0;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $light-text;
}

* {
  box-sizing: border-box;
  outline: 0;
  border: 0;
}

body {
  margin: 0px 0px;
  padding: 0px;
  background-color: $primary-bg;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
  padding: 0px;
}

nav {
  display: flex;
  position: fixed;
  width: 100%;
  padding: 20px;
  height: 80px;
  top: 0;
  justify-content: space-between;
  align-items: center;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  z-index: 9;

  .netflix-logo {
    width: 80px;
    height: 30px;
  }

  .netflix-avatar {
    width: 30px;
    height: 30px;
  }
}

nav.scrolled {
  background-color: $primary-bg;
}
</style>
