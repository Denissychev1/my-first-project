const Imitations = require('../models').imitation;

exports.getImitations = (req, res) => {
  Imitations.findAll({raw: true}).then(data => {
    res.send(
      data
    );
  }).catch(err => console.log(err));
};

// Creation of Imitation
exports.create = (req, res) => {
  // Save to PostgreSQL database
  Imitations.create(req.body).then(imitation => {
    // Send created pat to cli
    res.status(201).json(imitation);
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
};
// Delete a by Id
exports.delete = (req, res) => {
  const id = req.query.id;
  Imitations.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).json( { msg: 'Deleted Successfully. Imitation Id = ' + id } );
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
};
