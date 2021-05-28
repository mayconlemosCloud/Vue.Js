const routes = require("express").Router();
const PacienteController = require("./controllers/usuarios");




routes.get("/select", PacienteController.select);
routes.post("/inserir", PacienteController.inserir);
routes.post("/delete/:id",PacienteController.delete);
routes.post("/BuscarPaciente/:id",PacienteController.BuscarPaciente);
routes.post("/AtualizarPaciente/",PacienteController.UpdatePaciente);




module.exports = routes;