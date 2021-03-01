<template>
  <div id="app">
    <div id="nav">
      <img alt="cravo limão logo " src="./assets/limao_cravo.png">
      <b-nav>
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
        <b-nav-item><router-link to ="/Contato">Contato</router-link></b-nav-item>
      </b-nav>
     
    </div>
    <router-view/>

    <div class="footerDiv">
      <footer>
        <div id="social_net">
          <img src="./assets/021-facebook.png" alt="">
          <div id="social_net">
           <a href="https://www.facebook.com/estudiolimaocravo">Facebook</a>
          </div>
        </div>
        <div id="social_net">
          <img src="./assets/043-twitter.png" alt="">
          <div>
           <a href="https://twitter.com/elimaocravo">Twitter</a>
          </div>
        </div>
        <div id="social_net">
          <img src="./assets/011-youtube.png" alt="">
          <div>
            <a href="https://www.youtube.com/user/videoslimaocravo">YouTube</a>
          </div>
        </div>
        <div id="social_net">
          <img src="./assets/025-instagram.png" alt="">
          <div>
            <a href="https://www.instagram.com/limaocravo/">Instagram</a>
          </div>
        </div>
        <div id="social_net">
          <img src="./assets/045-linkedin.png" alt="">
          <div>
            <a href="https://br.linkedin.com/company/lim-o-cravo">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
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
footer{
  background: #42b983;
  display:flex;
  height:100px;
  width: 500px;
  right: 100%;
}
#social_net{
  display: inline-flex;
  height: 100%;
}
</style>
