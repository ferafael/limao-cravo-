<template>
  <div class="home">
    
    <SlideHome/>
    <About/>
    <NossosServicos/>
    <Client/>
    <Contacts/>
    <RodaPe/>
   




    
  </div>
</template>

<script>
// @ is an alias to /src
import SlideHome from '@/components/SlideHome'
import Client from '../components/Client'
import RodaPe from '../components/RodaPe'
import NossosServicos from '../components/NossoServicos'
import Contacts from '../components/Contacts'
import About from './About'

export default {
  name: 'Home',
  components: {
    SlideHome,
    Client,
    RodaPe,
    About,
    NossosServicos,
    Contacts
  
  }
}
</script>
<style scoped>
</style>