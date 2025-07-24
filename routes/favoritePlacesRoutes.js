const express = require('express')
const { createFavoritePlace, getFavoritePlaces, updatedFavoritePlace, deleteFavoritePlace, getSpecificPlace } = require('../controllers/favoritePlacesContoller')
const router = express.Router()



router.post('/postFavoritePlace' ,createFavoritePlace)
router.get('/getFavoritePlace' ,getFavoritePlaces)
router.put("/updateFavoritePlace/:id", updatedFavoritePlace);
router.delete("/deleteFavoritePlace/:id", deleteFavoritePlace);
router.get("/specificFavoritePlace/:id", getSpecificPlace);


module.exports = router;