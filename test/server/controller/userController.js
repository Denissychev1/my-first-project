const db = require('../bd/db.config.js');
const Patients = db.patients;
// Creation of Patient
exports.create = (req, res) => {
  // Save to PostgreSQL database
  Patients.create({
    "firstname": req.body.firstname,
    "lastname": req.body.lastname,
    "age": req.body.age,
    "id": req.body.id,
    "telephone": req.body.telephone,
    "password": req.body.password
  }).then(patient => {
    // Send created pat to cl
    res.json(patient);
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
