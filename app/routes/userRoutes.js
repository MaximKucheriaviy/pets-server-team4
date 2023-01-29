const express = require('express');
const { signup, login, logout, current, petController } = require('../controllers/userControllers');

const {auth, petsValidation, fileLoader,} = require('../middlewares');
const { ctrlWrapper, upload } = require('../helpers');

const router = express.Router();

const {
    getPets,
    addPet,
    deletePet,
    updatePet,
    updatePetAvatar,
  } = petController;

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", auth, logout);
router.get("/current", auth, current);

router.get('/pets', auth, ctrlWrapper(getPets));
router.post(
    '/pets',
    auth,
    upload.single('avatar'),
    petsValidation,
    ctrlWrapper(addPet),
    ctrlWrapper(fileLoader),
    ctrlWrapper(updatePetAvatar)
  );  
  router.delete('/pets/:petID', auth, ctrlWrapper(deletePet)); 
  router.put(
    '/pets/:petID',
    auth,
    upload.single('avatar'),
    petsValidation,
    ctrlWrapper(updatePet),
    ctrlWrapper(fileLoader),
    ctrlWrapper(updatePetAvatar)
  );


module.exports = router;