const router = require('express').Router();
const userController = require('../../controllers/api/user.controller');
const authguard = require('../../middleware/authguard');

router.use(authguard);
router.get('/koans', userController.getUnlockedKoans);
router.post('/koans', userController.addUnlockedKoan);
router.get('/koans/favorites', userController.getFavoriteKoans);
router.get('/koans/favorites/:id', userController.addKoanToFavorites);
router.delete('/koans/favorites/:id', userController.removeKoanFromFavorites);

module.exports = router;
