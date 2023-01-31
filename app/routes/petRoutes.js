const express = require('express');
const { petController } = require('../controllers/userControllers');

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


router.get('/', auth, ctrlWrapper(getPets));
router.post(
    '/',
    auth,
    upload.single('avatar'),
    petsValidation,
    ctrlWrapper(addPet),
    ctrlWrapper(fileLoader),
    ctrlWrapper(updatePetAvatar)
  );  
  router.delete('/:petID', auth, ctrlWrapper(deletePet)); 
  router.put(
    '/:petID',
    auth,
    upload.single('avatar'),
    petsValidation,
    ctrlWrapper(updatePet),
    ctrlWrapper(fileLoader),
    ctrlWrapper(updatePetAvatar)
  );


module.exports = router;