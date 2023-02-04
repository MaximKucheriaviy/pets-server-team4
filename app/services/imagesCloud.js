const path = require("path");
const { Storage } = require("@google-cloud/storage");

const storage = new Storage();
const bucketName = "pets-project-api";
const tmpDirPath = path.join(__dirname, "../", "tmp");
const baseURL = "https://storage.googleapis.com";

async function uploadImageForNotice(fileName, destFileName) {
  const filePath = `${tmpDirPath}/${fileName}`;
  const options = {
    destination: "destFileName",
    metadata: {
      cacheControl: "no-store",
    },
  };

  await storage.bucket(bucketName).upload(filePath, options);
  console.log(`${filePath} uploaded to ${bucketName}`);
}

async function deleteImageForNotice(imageURL, destination) {
  if (!imageURL) {
    return;
  }

  await storage.bucket(bucketName).file(path).delete();

  console.log(`gs://${bucketName}/${fileName} deleted`);
}

async function getImageUrl(fileName, destination) {
  return `${baseURL}/${bucketName}/${destination}/${fileName}`;
}

module.exports = { uploadImageForNotice, getImageUrl, deleteImageForNotice };
