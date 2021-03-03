<template>
  <div id="app">
    <div id="nav">
      <img alt="cravo limão logo " src="./assets/limao_cravo.png">
      <b-nav>
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
        <b-nav-item><router-link to ="/contato">Contato</router-link></b-nav-item>
      </b-nav>
     
    </div>
    <router-view/>
    
  </div>
</template>

<style>
body{
  display: block;
  margin: 0;
  margin-top:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
