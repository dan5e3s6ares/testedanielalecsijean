const Client = require("../models/clients.model.js");
const ClientWeight = require("../models/weights.model.js");

// Create and Save a new Client
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Client
  const client = new Client({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  });

  // Save Client in the database
  Client.create(client, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the clients."
      });
    else res.send(data);
  });  
};

// Create and Save a new Client Weight
exports.createWeight = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Client Weight
  const client = new ClientWeight({
    id: req.body.id,
    peso: req.body.peso,
  });

  // Save Client Weight in the database
  ClientWeight.createPeso(client, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the clients."
      });
    else res.send(data);
  });  
};

// Retrieve all Client from the database (with condition).
exports.findAll = (req, res) => {
    const name = req.query.name;

    Client.getAll(name, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving clients."
        });
      else res.send(data);
    });
};

// Retrieve all Weights from the database (with condition).
exports.findAllpeso = (req, res) => {
  const peso = req.params.peso;

  ClientWeight.getAll(peso, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving weights peso."
      });
    else res.send(data);
  });
};

// Retrieve all Client Weights from the database (with condition).
exports.joinPeso = (req, res) => {
  const peso = req.params.peso;
  ClientWeight.join(peso, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while joining clients and weights"
      });
    else res.send(data);
  });
};

// Retrieve all Client Weights from the database (with condition).
exports.aliasPeso = (req, res) => {
  ClientWeight.alias( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while Alias clients and weights"
      });
    else res.send(data);
  });
};

// Drop weight Table
exports.dropWeights = (req, res) => {
  ClientWeight.drop( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while dropping weights table"
      });
    else res.send(data);
  });
};

// Drop users Table
exports.dropUsers = (req, res) => {
  console.log('DROP USERS');
  Client.drop((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while dropping users table"
      });
    else res.send(data);
  });
};

  
exports.findAllAge = (req, res) => {
    Client.getAllAge((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving clients."
        });
      else res.send(data);
    });
};

// Find a single Client with a id
exports.findOne = (req, res) => {
  Client.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Client with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Client with id " + req.params.id
            });
          }
        } else res.send(data);
      });  
};

// Find the lowest weight
exports.minWeight = (req, res) => {
  ClientWeight.min( (err, data) => {
        if (err) {
            res.status(500).send({
              message: "Error retrieving lowest weight "
            });
        } else res.send(data);
      });  
};

// find all Age Clients
exports.findAllAge = (req, res) => {
  Client.getAllAge(req.body.age, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients."
      });
    else res.send(data);
})};

// Update a Client identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Client.updateById(
    req.params.id,
    new Client(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Client with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Client with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Client with the specified id in the request
exports.delete = (req, res) => {
  Client.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Client with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Client with id " + req.params.id
            });
          }
        } else res.send({ message: `Client was deleted successfully!` });
    }); 
};

// Delete all Clients from the database.
exports.deleteAll = (req, res) => {
  Client.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all clients."
          });
        else res.send({ message: `All Clients were deleted successfully!` });
    }); 
};

// Find all Clients where age > X.
exports.ageBig = (req, res) => {
  console.log('idade :', req.body.age);
  Client.getAgeplus(req.body.age, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while searching for clients ages."
      });
    else res.send(data);
  });
};
