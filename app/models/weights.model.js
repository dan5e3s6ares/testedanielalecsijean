const sql = require("./db.js");

// constructor
const ClientWeight = function(client) {
    this.peso = client.peso;
    this.id = client.id;
  };

ClientWeight.createPeso = (newClientWeight, result) => {
    sql.query("INSERT INTO weights SET ?", newClientWeight, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created client weight: ", { id: res.insertId, ...newClientWeight });
      result(null, { id: res.insertId, ...newClientWeight });
    });
  };

ClientWeight.getAll = (peso, result) => {
    let query = "SELECT * FROM weights";
  
    if (peso) {
      query += ` WHERE peso = ${peso}`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("clients: ", res);
      result(null, res);
    });
  };

ClientWeight.join = (peso, result) => {
    let query = `SELECT * FROM users LEFT JOIN weights ON weights.id=users.id WHERE weights.peso > ${peso}`;
    sql.query(query, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
        console.log("clients: ", res);
        result(null, res);        
    });
};

ClientWeight.min = result => {
    let query = `
    SELECT min(u.peso) AS peso, 
    (select users.name from users where users.id=u.id) as  nome_menorpeso 
    from weights u `;
    sql.query(query, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
        console.log("clients: ", res);
        result(null, res);        
    });
};

ClientWeight.alias = result => {
    let query = `SELECT A.name, A.email, B.peso FROM users AS A, weights AS B WHERE A.id=B.id `;
    sql.query(query, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
        console.log("clients: ", res);
        result(null, res);        
    });
};

ClientWeight.drop = result => {
    let query = `DROP TABLE weights`;
    sql.query(query, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
        console.log("Table Weights Dropped");
        result(null, res);        
    });
}; 

module.exports = ClientWeight;