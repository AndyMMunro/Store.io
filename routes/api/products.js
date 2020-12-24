const db = require("../../models");
const express = require("express");
const router = express.Router();

module.exports = function(router) {

  router.get("/products", function(req, res) {
    db.products.findAll().then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  // router.get("/products/:id", function(req, res) {
  //   db.Products.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbProducts) {
  //     res.json(dbProducts);
  //   });
  // });

  // router.post("/products", function(req, res) {
  //   db.Products.create(req.body).then(function(dbProducts) {
  //     res.json(dbProducts);
  //   });
  // });

  // router.delete("/products/:id", function(req, res) {
  //   db.Products.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbProducts) {
  //     res.json(dbProducts);
  //   });
  // });

};