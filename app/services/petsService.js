const isValid = require("mongoose").Types.ObjectId.isValid;
const ObjectId = require("mongoose").Types.ObjectId;
const { deleteImage } = require("./google-cloud");

const { Pet } = require("../models");

const getAllPet = async (userID) => {
  const pets = await Pet.find({ owner: userID }).populate(
    "owner",
    "_id name email"
  );
  return pets;
};

const getPetById = async (petID) => {
  if (!isValid(petID)) return false;
  return await Pet.findById(petID);
};

const createPet = async (userID, pet) => {
  const newPet = await Pet.create({ ...pet, owner: userID });
  return newPet;
};

const updatePetInfo = async (petID, info) => {
  const { name, birthdate, breed, comments } = info;
  const pet = await Pet.findByIdAndUpdate(
    { _id: petID },
    {
      name: name,
      birthdate: birthdate,
      breed: breed,
      comments: comments,
    },
    { new: true }
  );
  if (!pet) {
    return null;
  }
  return pet;
};

const addPetAvatar = async (avatarURL, pet) => {
  const avatar = await Pet.findByIdAndUpdate(
    { _id: pet._id },
    {
      avatarURL: avatarURL,
    },
    { new: true }
  );
  if (!avatar) {
    return null;
  }
  return avatar;
};

const removePet = async (petsID) => {
  if (!isValid(petsID)) return false;

  
  const data = await Pet.findByIdAndRemove(petsID);
  const destination = "pets";
  if (data.avatarURL) {
    await deleteImage(data.avatarURL, destination);
  }
  return data;
};

module.exports = {
  getAllPet,
  getPetById,
  createPet,
  updatePetInfo,
  addPetAvatar,
  removePet,
};
