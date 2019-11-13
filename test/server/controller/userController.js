exports.getUsers = async (req, res) => {
  try {
    res.status(200).json({
      name : "User #1",
      email : "email@gmai.com"
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
