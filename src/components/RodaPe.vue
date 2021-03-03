<template>
    <div class="rodape">
      <footer>
        <div class="footerDiv">
          <div>
              <h4>Siga nas redes sociais:</h4>
            </div>
          <div id="social_net">
            <a href="https://www.facebook.com/estudiolimaocravo"  target="_blank"> 
              <img  id ="imgFooter" src="../assets/021-facebook.png" alt=""> 
            </a>
          </div>
          <div id="social_net">
            <a href="https://twitter.com/elimaocravo" target="_blank" > 
              <img id ="imgFooter" src="../assets/043-twitter.png"  alt=""> 
            </a>
          </div>
          <div id="social_net">
            <a href="https://www.youtube.com/user/videoslimaocravo" target="_blank" >
              <img  id ="imgFooter" src="../assets/011-youtube.png" alt=""> 
            </a>
          </div>
          <div id="social_net">
            <a href="https://www.instagram.com/limaocravo/" target="_blank" >
              <img  id ="imgFooter" src="../assets/025-instagram.png" alt="">
            </a>
          </div>
          <div id="social_net">
            <a href="https://br.linkedin.com/company/lim-o-cravo" target="_blank" >
              <img id ="imgFooter"  src="../assets/045-linkedin.png" alt="">
            </a>
          </div>
          
        </div>
        <div class="copy">
            <p>&copy; 2021 Limão Cravo</p>
          </div>
       </footer>
    </div>
</template>
<script>

export default {
    

    
}
</script>
<style scoped>
.rodape{
  margin-top: 90px;
}
#imgFooter{
  width: 40px;
  height: 40px;
}
footer{
  background: chocolate;
  display:flex;
  height:200px;
  width: 100%;
}
.footerDiv{
  display: inline-block ;
  width: 250px;
  height: 300px;
  margin: auto;
  position: absolute;
  left: 79%;
  align-items: center;
  
  
}
#social_net
{
  display:inline-block;
  width:50px;
  height: 10px;
  margin-top: 50px;
  
}
.copy{
  height: 50px;
  height: 50px;
  top: 10px;
  margin-top: 4%;
  margin-left: 40%;
}
</style>