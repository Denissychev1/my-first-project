module.exports = function(app) {
  const patients = require('../server/controller/userController');

  // Create a new Customer
  app.post('/patients', patients.create);

  // Retrieve all Customer
  app.get('/patients', patients.findAll);


  // Delete a Customer with Id
  app.delete('/patients', patients.delete);
};
