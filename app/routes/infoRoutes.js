const express = require("express");
const api = require("../../jsonFiles/api");

const router = express.Router();

router.get("/news", async (req, res, next) => {
  try {
    const news = await api.getNews();
    res.json({
      message: "success",
      data: news,
    });
  } 
  catch (err) {
    next(err);
  }
});
router.get("/sponsors", async (req, res, next) => {
  try {
    const sponsors = await api.getSponsors();
    res.json({
      message: "success",
      data: sponsors,
    });
  } 
  catch (err) {
    next(err);
  }
});

module.exports = router;
