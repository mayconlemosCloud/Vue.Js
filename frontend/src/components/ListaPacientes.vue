<template>
  <div>
    
    <table class="table table-bordered">
  <thead>
    <tr>
      
      <th scope="col">Nome</th>
      <th scope="col">Idade</th>
      <th scope="col">Ativo</th>
      <th></th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="row in listaDePaciente" :key="row.id">      
      <td>{{row.nome}}</td>
      <td>{{row.idade}}</td>
      <td v-if="row.teste == 1">Positivo</td>
      <td v-else>Negativo</td>
      <td> 
        <b-button class="deletar" @click="deletar(row.id)"  variant="danger">Deletar</b-button> 
        <b-button class="editar" @click="editar(row.id)"  variant="danger">Editar</b-button>
      </td>
    </tr>
    
  </tbody>
        </table>


  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data(){
        return{
            
        }
    },
    computed: mapState([
        'listaDePaciente'
    ]),
    methods:{
        deletar(id){
        console.log('id do paciente '  + id)  
        this.$store.commit('DEL_POST_PACIENTE',id)
        this.$store.dispatch('getPaciente')
        },

        editar(id){
        console.log('id do paciente ' + id)       
        this.$store.dispatch('getPacienteID',id)
        }
    },

    mounted(){     
        
      
       this.$store.dispatch('getPaciente')
    }

}
</script>

<style>

.TablePaciente > div{
 width: 700px;
 padding:0 40px 0 40px;
   
}
table.table-bordered{
    width: 100%;
     background-color: rgba(255,255,255,0.3);
}
th{
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 500;
  font-size: 20px;
  color: black;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}
.btn.deletar.btn-danger{
  margin-right: 10px;
}




</style>