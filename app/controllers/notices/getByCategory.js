const { Notice } = require("../../models/noticeModel");
const { httpError } = require("../../helpers");

const getByCategory = async (req, res) => {
  const { type: category } = req.params;
  const { query } = req.query;

  const result = await Notice.find({ category });

  if (!result) {
    throw httpError(404, "Not found");
  }

  if (query) {
    const filteredResult = result.filter(({ title }) =>
      title.toLowerCase().includes(query.toLowerCase())
    );

    res.json(filteredResult);
  } else {
    res.json(result);
  }
};

module.exports = getByCategory;
