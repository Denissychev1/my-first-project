
exports.getImitations = async (req, res) => {
  try {
    res.status(200).json(json);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
