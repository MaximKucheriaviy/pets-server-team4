const path = require("path");
const { Storage } = require("@google-cloud/storage");

const storage = new Storage();
const bucketName = "pets-project-api";
const tmpDirPath = path.join(__dirname, "../", "tmp");
const baseURL = "https://storage.googleapis.com";

async function uploadImageToStorage(fileName, destFileName) {
  const filePath = `${tmpDirPath}/${fileName}`;
  const options = {
    destination: destFileName,
    metadata: {
      cacheControl: "no-store",
    },
  };

  await storage.bucket(bucketName).upload(filePath, options);
}

async function deleteImageFromStorage(filePath) {
  await storage.bucket(bucketName).file(filePath).delete();
}

module.exports = { uploadImageToStorage, deleteImageFromStorage };
