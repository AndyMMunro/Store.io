const db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req,res){
    db.user.findAll({
      include: [db.Post]
    }).then(function(dbUser){
      res.json(dbUser)
    })
  })
}