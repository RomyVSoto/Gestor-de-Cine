const express = require("express");

const router = express.Router();
const CineController = require("../controllers/CineController");

router.get("/", CineController.GetSerieIndex);
router.get("/", CineController.GetGenreIndex);
router.get("/serie-detail/:serieId", CineController.GetSerie);
router.get("/search", CineController.SearchSeries);
router.get("/filter", CineController.FilterSeries);

module.exports = router;
