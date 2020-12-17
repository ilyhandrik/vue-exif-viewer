<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <div class="header" style="color: #d0d0d0">
      #EXIF VIEWER
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
  @import "styles/styles";

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: $color-7;
    font-family: 'Roboto Mono', monospace;
  }

  #app {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 0 20px;
  }

  .header {
    width: 100%;
    text-align: center;
    font-size: 18px;
    background: $color-8;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
