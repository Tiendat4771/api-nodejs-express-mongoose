import Product from './products.model';

export const getAll = (req, res) => {
  Product.find({}, (err, response) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  });
};

export const getOne = (req, res) => {
  Product.findById(req.params.id, (err, response) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  });
};

export const updateOne = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, (err, response) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  });
};

export const createOne = (req, res) => {
  Product.create(req.body, (err, resoponse) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(resoponse);
    }
  });
};


export const deleteOne = (req, res) => {
  res.json({ deleteOne: true });
};
