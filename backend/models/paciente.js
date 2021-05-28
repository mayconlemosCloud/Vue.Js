const mysql = require('mysql2');

const sql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'covid'
});

const paciente = function(paciente) {
    this.nome = paciente.nome;
    this.idade = paciente.idade;
    this.teste = paciente.teste;
    this.id = paciente.id;
  };

  paciente.getAll = result => {
    sql.query("SELECT * FROM paciente", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("paciente: ", res);
      result(null, res);
    });
  };

  paciente.create = (novoPaciente, result) => {
    console.log(novoPaciente)
    sql.query("INSERT INTO paciente SET ?", novoPaciente, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Paciente : ", { id: res.insertId, ...novoPaciente });
      result(null, { id: res.insertId, ...novoPaciente });
    });
  };

  paciente.remove = (id, result) => {
    sql.query("DELETE FROM paciente WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
      
        result({ Paciente: "not_found" }, null);
        return;
      }
  
      console.log("Paciente com id: ", id);
      result(null, res);
    });
  };

  paciente.findById = (id, result) => {
    sql.query(`SELECT * FROM paciente WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Paciente Encontrado: ", res[0]);
        result(null, res[0]);
        return;
      }
  
    
      result({ Paciente: "not_found" }, null);
    });
  };

  paciente.updateById = (paciente, result) => {
    console.log(paciente)
    sql.query(
      "UPDATE paciente SET nome = ?, idade = ?, teste = ? WHERE id = ?",
      [paciente.nome, paciente.idade, paciente.teste, paciente.id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ Paciente: "not_found" }, null);
          return;
        }
  
        //console.log("Atualizado paciente: ", { id: id, ...paciente });
        result(null, { id: paciente.id, ...paciente });
      }
    );
  };
  


  module.exports = paciente;