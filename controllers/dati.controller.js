const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const Dati = require("../models/dati.model.js");
const { generateCrudMethods } = require("../services")
const datiCrud = generateCrudMethods(Dati)
const { validateDbId, raiseRecord404Error } = require("../middlewares")
const resetJson = require("../json/reset.json")

//getAll
router.get("/", (req, res) => {
    datiCrud.getAll()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//getById
router.get("/:id", validateDbId, (req, res) => {
  datiCrud.getById(req.params.id)
      .then((data) => {
        if (data) res.send(data);
        else raiseRecord404Error(req, res)
      })
      .catch((err) => console.log(err));
});

//create
router.post("/", (req, res) => {
    datiCrud.create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => console.log(err));
});

//update
router.put("/:id", validateDbId, (req,res) => {
    datiCrud.update(req.params.id, req.body)
    .then((data) => {
        if (data) res.send(data);
        else raiseRecord404Error(req, res)
      })
      .catch((err) => console.log(err));
 })

//delete
router.delete("/:id", validateDbId, (req,res) => {
    datiCrud.delete(req.params.id, req.body)
    .then((data) => {
        if (data) res.send(data);
        else raiseRecord404Error(req, res)
      })
      .catch((err) => console.log(err));
 })

 //reset
router.put("/reset/:id", validateDbId, (req,res) => {
    datiCrud.update(req.params.id, resetJson)
    .then((data) => {
        if (data) res.send(data);
        else raiseRecord404Error(req, res)
      })
      .catch((err) => console.log(err));
 })

module.exports = router;
