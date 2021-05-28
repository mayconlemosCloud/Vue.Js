<template>
  <div id="app" class="main">
    <Dashboard/>
    <Pacientes/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard'
import Pacientes from './components/Pacientes'
export default {
  name: 'App',
  components: {
   Dashboard,
   Pacientes
  }
}
</script>

<style>

*{
  box-sizing: border-box;
}
body {
  background-color: #0dd8ee;
  margin : 0 ;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 

}
.main{
  width: 100%; 
  height: 100vh;
  background-image: url('img/bg.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}

</style>
