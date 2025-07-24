const FavoritePlace = require("../models/favoritePlacesModel");

const createFavoritePlace = async (req, res) => {
  try {
    const { user, locations } = req.body;

    if (!user || !locations || !Array.isArray(locations)) {
      return res
        .status(400)
        .json({ error: "User and location array are required." });
    }

    const newFavoritePlace = await FavoritePlace.create({
      user,
      locations: locations,
    });

    return res.status(201).json({
      msg: "Favorite place saved successfully",
      data: newFavoritePlace,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

const getFavoritePlaces = async (req, res) => {
  try {
    const allFavoritePlaces = await FavoritePlace.find();

    if (allFavoritePlaces.length === 0) {
      return res.status(404).json({ message: "No favorite places found." });
    }

    return res.status(200).json({
      message: "Favorite places retrieved successfully",
      data: allFavoritePlaces,
    });
  } catch (error) {
    console.error("Error fetching favorite places:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

const updatedFavoritePlace = async (req, res) => {
  try {
    const placeId = req.params.id;
    const { user, locations } = req.body;

    const updatePlace = await FavoritePlace.findByIdAndUpdate(
      placeId,
      {
        user,
        locations,
      },
      { new: true }
    );

    if (!updatePlace) {
      return res.status(404).json({ message: "Favorite place not found." });
    }

    return res.status(200).json({
      message: "Favorite place updated successfully",
      data: updatePlace,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

const deleteFavoritePlace = async (req, res) => {
  try {
    const placeId = req.params.id;

    const deletedPlace = await FavoritePlace.findByIdAndDelete(placeId);

    if (!deletedPlace) {
      return res.status(404).json({ message: "Favorite place not found." });
    }

    return res.status(200).json({
      message: "Favorite place deleted successfully.",
      data: deletedPlace,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
  }
};
const getSpecificPlace = async (req, res) => {
  try {
    const placeId = req.params.id;

    const specificPlace = await FavoritePlace.findById(placeId);

    if (!specificPlace) {
      return res.status(404).json({ message: "Favorite place not found." });
    }

    return res.status(200).json({
      message: "Favorite place retrieved successfully.",
      data: specificPlace,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = {
  createFavoritePlace,
  getFavoritePlaces,
  updatedFavoritePlace,
  deleteFavoritePlace,
  getSpecificPlace
};
