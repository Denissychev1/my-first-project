const Imitations = require('../bd/tests');

exports.getImitations = (req, res) => {
  Imitations.findAll({raw: true}).then(data => {
    res.send(
      data
    );
  }).catch(err => console.log(err));
};

// Creation of Patient
exports.create = (req, res) => {
  // Save to PostgreSQL database
  Imitations.create(req.body).then(imitation => {
    // Send created pat to cl
    res.status(201).json(imitation);
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
};
// Delete a Patient by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  Imitations.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).json( { msg: 'Deleted Successfully. Imitation Id = ' + id } );
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
};
