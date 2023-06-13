<template>
  <nav :class="{ scrolled: isScrolled }">
    <router-link to="/">
      <img
        src="../src/assets/netflix-logo.png"
        alt="netflix-logo"
        class="netflix-logo"
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
  // Diğer bileşen kodları
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0px 0px;
  padding: 0px;
  background-color: #111;
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
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  top: 0;
  justify-content: space-between;
  align-items: center;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  z-index: 1;
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
  background-color: #111;
}
</style>
