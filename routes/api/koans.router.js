const express = require('express');
const router = express.Router();
const koansController = require('../../controllers/api/koans.controller');

router.post('/load', koansController.loadKoans);
router.post('/', koansController.createKoan);
router.get('/:id', koansController.getKoanById);
router.get('/', koansController.getKoans);
router.put('/:id', koansController.updateKoan);
router.delete('/:id', koansController.deleteKoan);

module.exports = router;
