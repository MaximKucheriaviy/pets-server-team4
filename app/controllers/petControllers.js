const { petsService } = require("../services");

const { getAllPet, createPet, removePet, updatePetInfo, addPetAvatar } =
  petsService;

const getPets = async (req, res) => {
  const { _id } = req.user;
  const result = await getAllPet(_id);
  res.json({ code: 200, data: { pets: result }, status: "Success" });
};

const addPet = async (req, res, next) => {
  const { _id } = req.user;
  const pet = req.body;
  const newPet = await createPet(_id, pet);
  req.result = newPet;
  next();
};

const updatePet = async (req, res, next) => {
  const { petID } = req.params;
  const info = req.body;
  const updatedPet = await updatePetInfo(petID, info);
  req.result = updatedPet;
  next();
};

const updatePetAvatar = async (req, res, next) => {
  const avatarURL = req.body.avatarURL;
  const pet = req.result;
  const result = await addPetAvatar(avatarURL, pet);
  if (!result) {
    res.status(500).json({
      code: 500,
      status: "Failed",
      message: "Upload avatar failed, try again",
    });
  }
  res.status(201).json({
    code: 201,
    status: "Success",
    data: {
      pet: result,
    },
  });
};

const deletePet = async (req, res) => {
  const { petID } = req.params;
  const result = await removePet(petID);
  console.log(result)

  if (!result) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }

  res.json({ code: 200, message: "Pet is deleted", status: "Success", result });
};

module.exports = {
  updatePet,
  updatePetAvatar,
  getPets,
  addPet,
  deletePet,
};
