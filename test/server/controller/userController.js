const Patients = require('../db/patients');

//show All patients
exports.getPatients = (req, res) => {
  Patients.findAll({raw: true}).then(data => {
    res.send(
      data
    );
  }).catch(err => console.log(err));
};

// Creation of Patient
exports.create = async (req, res) => {
  try {
    // Save to PostgreSQL database
    let patient = await Patients.create(req.body);
    // Send created pat to cl
    res.status(201).json(patient);
  } catch (err) {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  }
};

// Delete a Patient by Id
exports.delete = (req, res) => {
  const id = req.query.id;
  Patients.destroy({
    where: {id: id}
  }).then(() => {
    res.status(200).json({msg: 'Deleted Successfully. Patient Id = ' + id});
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
};

// Find a Patient by name
exports.findById = (req, res) => {
  const id = req.query.id;
  Patients.findByPk(id).then(patient => {
    res.json(patient);
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
};

//auth?!
exports.auth = async (req, res) => {
  const id = req.body.value.id;
  const password = req.body.value.password;

  if (!id || !password) {
    res.status(400).send('check your data');
    return;
  }

  const user = await Patients.findOne({
    where: {
      id: id,
      password: password
    }
  });
  if (user) { if (user.isAdmin === true){res.send(true)}
  else {res.send(false)}
  }
  else {
    res.status(401).send('invalid');
  }
};



