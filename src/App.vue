<template>
  <div id="app">
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/Playa">Playa 前台</router-link> |
        <router-link to="/admin">Admin</router-link>
      </div> -->
    <div class="container-fuild">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
// *{
//   outline: 1px solid darksalmon;
// }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
