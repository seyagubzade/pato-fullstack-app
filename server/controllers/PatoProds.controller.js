const { PatoProds } = require("../models/PatoProds.model");

const PatoProdsController = {
  getAll: async (req, res) => {
    try {
      const data = await PatoProds.find({});
      res.send(data).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const target = await PatoProds.findById(id);
      res.send(target).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  deleteById: async (req, res) => {
    try {
      const { id } = req.params;
      await PatoProds.findByIdAndDelete(id);
      const data = await PatoProds.find({});
      res.send(data).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  add: async (req, res) => {
    try {
      const { name, desc, price, image } = req.body;
      const newData = new PatoProds({ name, desc, price, image });
      await newData.save()
      res.send(newData).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
};


module.exports={PatoProdsController}