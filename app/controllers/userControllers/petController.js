
const { petsService } = require('../../services');

const { getAllPet, createPet, removePet, updatePetInfo, addPetAvatar } =
  petsService;



const getPets = async (req, res) => {
  const result = await getAllPet(req.user.id, req.query);

  res.json({ code: 200, data: { pet: result }, status: 'Success' });
};


const addPet = async (req, res, next) => {
  const user = req.user;
  const pet = req.body;
  const newPet = await createPet(user._id, pet);
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
  const avatarURL = req.avatarURL;
  const pet = req.result;
  const result = await addPetAvatar(avatarURL, pet);
  if (!result) {
    res.status(500).json({
      code: 500,
      status: 'Failed',
      message: 'Upload avatar failed, try again',
    });
  }
  res.status(201).json({
    code: 201,
    status: 'Success',
    data: {
      pet: result,
    },
  });
};


const deletePet = async (req, res, next) => {
  const result = await removePet(req.user.id, req.params.petID);

  if (!result) {
    next();
    return;
  }
  res.json({ code: 200, message: 'Pet is deleted', status: 'Success' });
};

module.exports = {
  updatePet,
  updatePetAvatar,
  getPets,
  addPet,
  deletePet,
};
