const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Record
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Record
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("...create");
    console.log(req.body);
    db.Record
      .create(req.body)
      .then(dbModel => {console.log(dbModel); res.json(dbModel)})
      .catch(err => {console.error(err); res.status(422).json(err)});
  },
  update: function(req, res) {
    db.Record
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Record
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
