const fs = require('fs/promises');

const readJsonFine = async (filename) => {
    const data = await fs.readFile(filename, "utf-8");
    const parsedData = JSON.parse(data);
    return parsedData;
}

const getNews = async () => {
    const news = await readJsonFine("news.json");
    return news;
}

const getSponsors = async () => {
    const news = await readJsonFine("sponsors.json");
    return news;
}


module.exports = {
    getNews,
    getSponsors
}