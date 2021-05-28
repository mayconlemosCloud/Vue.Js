const paciente = require("../models/paciente");
const Pacientes = require("../models/paciente");



module.exports = {
  async select(req, res) {
  
    // var email = req.body.email
    // var senha = req.body.senha     
    Pacientes.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });

  },



  async inserir(req, res) {

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  

    const paciente = new Pacientes({
      nome: req.body.nome,
      idade: req.body.idade,
      teste: req.body.teste
    });
  

    Pacientes.create(paciente, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Algum erro aconteceu"
        });
      else res.status(200).send( {message: `Paciente cadastrado.`});
    });
  


  },

  async delete(req,res){
    console.log(req.params.id)
    Pacientes.remove(req.params.id, (err, data) => {
      if (err) {
        console.log(err.id)
        if (err.id === "not_found") {
          res.status(404).send({
            message: `Cliente não encontrado com id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Não foi possível excluir o cliente com id " + req.params.id
          });
        }
      } else res.send({ message: `Paciente deletado!` });
    });
  },
  async UpdatePaciente(req,res){
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    console.log(req.body);

    paciente.updateById(new Pacientes(req.body),(err, data) => {
       
        if (err) {
         
          if (err.id === "not_found") {
            res.status(404).send({
              message: `Paciente não encontrado com id ${req.body.id}.`
            });
          } 
          
          else {
            res.status(500).send({
              message: "Não foi possível atualizar o Paciente com id " + req.body.id
            });
          }

        } else res.status(200).send({
          message: 'Dados do Paciente Atualizado'
        });
        
      }


    );

  },

  async BuscarPaciente(req,res){
    Pacientes.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.id === "not_found") {
          res.status(404).send({
            message: `Paciente não encontrado com id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Não foi possível excluir o Paciente com id " + req.params.id
          });
        }
      } else res.send(data);
    });
  }









}