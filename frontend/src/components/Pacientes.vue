<template>
  <div class="contentPaciente">
    <div class="formpaciente">
      <b-card-group deck>
        <b-card
          border-variant="primary"
          header="Primary"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
        >
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="input-group-2"
              label="Nome do Paciente:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.nome"
                placeholder="Entre com nome do Paciente"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Idade:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.idade"
                placeholder="Entre com a idade Paciente"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Teste:" label-for="input-3">
              <b-form-select
                class="form-control"
                id="input-3"
                v-model="form.teste"
                :options="teste"
                required
              ></b-form-select>
            </b-form-group>

            <b-button class="my-5 mr-2" type="submit" variant="primary"
              >Cadastrar</b-button
            >
            <b-button class="my-5 mr-2" type="reset" variant="danger"
              >Limpar</b-button
            >
          </b-form>
        </b-card>
      </b-card-group>
    </div>
    <div class="TablePaciente">
      <ListaPacientes />
    </div>
  
  </div>
</template>

<script>
import axios from "axios";
import ListaPacientes from "./ListaPacientes";

export default {
  components: {
    ListaPacientes,
  },
  data() {
    return {
      form: {
        nome: "",
        idade: "",
        teste: "",
      },
      teste: [
        { text: "Positivo", value: 1 },
        { text: "Negativo", value: 0 },
      ],
    };
  },
  computed: {
    PacienteId() {
      return this.$store.getters.getPaciente;
    },
  },

  watch: {
    PacienteId(n) {
      this.form = n;
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

     if(this.form.id == null){
        axios
        .post("http://localhost:3000/inserir", this.form)
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.$store.dispatch("getPaciente");
        });
     }else{ 
       console.log('editando')
       console.log(this.form)
       axios
        .post("http://localhost:3000/AtualizarPaciente/", this.form)
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.$store.dispatch("getPaciente");
        });
     }

     
    },
    onReset(event) {
      event.preventDefault();

      this.form.nome = "";
      this.form.idade = "";
      this.form.teste = null;
    },
  },
};
</script>

<style>
.contentPaciente {
  display: flex;
  width: 100vh;
  flex-direction: row;
  padding: 10px 10px 15px 10px;
  justify-content: space-between;
}
.formpaciente {
  padding: 10px 10px 15px 10px;
}
.card-deck {
  width: 500px;
}
</style>