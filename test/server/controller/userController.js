const Patients = require('../bd/connection');
// Creation of Patient
exports.create = (req, res) => {
  // Save to PostgreSQL database
  Patients.create(req.body).then(patient => {
    // Send created pat to cl
    res.status(201).json(patient);
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
};
// Delete a Patient by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  Patients.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).json( { msg: 'Deleted Successfully. Patient Id = ' + id } );
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
};
