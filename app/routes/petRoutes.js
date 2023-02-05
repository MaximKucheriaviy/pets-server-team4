const express = require('express');
const petController = require('../controllers/petControllers');

const {authPet, petsValidation, fileLoader, isValidPetId} = require('../middlewares');
const { ctrlWrapper, upload } = require('../helpers');

const router = express.Router();

const {
    getPets,
    addPet,
    deletePet,
    updatePet,
    updatePetAvatar,
  } = petController;


router.get('/', authPet, ctrlWrapper(getPets));
router.post(
    '/',
    authPet,
    upload.single('avatarURL'),
    petsValidation,
    ctrlWrapper(addPet),
    ctrlWrapper(fileLoader),
    ctrlWrapper(updatePetAvatar)
  );  
  router.delete('/:petID', authPet, isValidPetId, ctrlWrapper(deletePet)); 
  router.put(
    '/:petID',
    authPet,
    isValidPetId, 
    upload.single('avatarURL'),
    petsValidation,
    ctrlWrapper(updatePet),
    ctrlWrapper(fileLoader),
    ctrlWrapper(updatePetAvatar)
  );


module.exports = router;