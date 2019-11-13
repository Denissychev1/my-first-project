const express = require('express');
const app = express();

const port = 2000;

app.use('/api/users', async (req, res) => {
  try {
    res.status(200).json({
      name : "User #1",
      email : "email@gmai.com"
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

app.use('/api/imitations', async (req, res) => {
  try {
    res.status(200).json({
      name : "Imitation #1"
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`App listening on port ${port}`);
});
