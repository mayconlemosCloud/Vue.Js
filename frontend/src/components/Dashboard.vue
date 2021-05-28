<template>
  <div class="dashboard">
    <div class="dashboard-card">
      <b-container>
        <b-row>
          <b-col>
            <b-card-group class="cardgroup" deck>
              <b-card
                bg-variant="success"
                text-variant="white"
                header="Pacientes Negativos"
              >
                <b-card-text class="bcardPainel">   {{PacientesNegativo}} </b-card-text>
              </b-card>
            </b-card-group>
          </b-col>
          <b-col>
            <b-card-group class="cardgroup" deck>
              <b-card
                bg-variant="danger"
                text-variant="white"
                header="Pacientes Positivos"
              >
                <b-card-text class="bcardPainel">
                  {{PacientesPositivo}}
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      PacientesNegativo: "",
      PacientesPositivo: "",
    };
  },

  mounted() {
      axios.get("http://localhost:3000/select").then((response) => {
      this.PacientesPositivo = response.data
       .filter(({teste}) => teste == 1)
       .length 

       this.PacientesNegativo = response.data
       .filter(({teste}) => teste == 0)
       .length 
    });
  },
};
</script>

<style >
.dashboard {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;
}

.dashboard-card {
  padding-top: 5px;
}
.cardgroup.card-deck {
  width: 400px;
  text-align: center;
}
.card-text.bcardPainel {
  height: 100px;
  text-align: center;
  font-size: 60px;
}
</style>