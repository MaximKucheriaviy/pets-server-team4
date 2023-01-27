const fs = require("fs/promises");
const path = require('path');

const newsPath = path.join(__dirname, "news.json");
const sponsorsPath = path.join(__dirname, "sponsors.json");

const readJsonFine = async (filename) => {
  try {
    const data = await fs.readFile(filename, "utf-8");
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (err) {
    throw err;
  }
};

const getNews = async () => {
  try {
    const news = await readJsonFine(newsPath);
    return news;
  } catch (error) {
    throw error;
  }
};

const getSponsors = async () => {
  try {
    const sponsors = await readJsonFine(sponsorsPath);
    return sponsors;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getNews,
  getSponsors,
};
