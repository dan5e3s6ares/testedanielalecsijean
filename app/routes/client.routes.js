module.exports = app => {
    const clients = require("../controllers/clients.controller.js");
  
    var router = require("express").Router();

    // Find min weight
    router.get("/minweight", clients.minWeight);

    // Delete users table  
    router.delete("/users", clients.dropUsers);

    // Delete weights table
    router.delete("/weight", clients.dropWeights);

    // Retrive Clients where age is bigger
    router.get("/bigger", clients.ageBig);

    // Create a new Client Weight
    router.post("/weight", clients.createWeight);

    // Retrieve all Clients Weights
    router.get("/weight/:peso", clients.findAllpeso);

    // Retrieve all Clients Weights
    router.get("/weight", clients.findAllpeso);

    // Retrieve all Clients over Weight
    router.get("/overweight/:peso", clients.joinPeso);

    // Retrieve all Clients with Weight
    router.get("/alias", clients.aliasPeso);

    // Retrieve all Age Clients
    router.get("/age", clients.findAllAge);
  
    // Create a new Client
    router.post("/", clients.create);
  
    // Retrieve all Clients
    router.get("/", clients.findAll);
  
    // Retrieve a single Client with id
    router.get("/:id", clients.findOne);
  
    // Update a Client with id
    router.put("/:id", clients.update);
  
    // Delete a Client with id
    router.delete("/:id", clients.delete);
  
    // Delete all Clients
    router.delete("/", clients.deleteAll);

    app.use('/api/clients', router);
  };