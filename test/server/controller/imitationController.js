exports.getImitations = async (req, res) => {
  try {
    res.status(200).json({
      name : "Imitation #1"
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
