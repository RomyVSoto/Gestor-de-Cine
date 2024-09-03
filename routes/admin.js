const express = require("express");

const router = express.Router();
const AdminController = require("../controllers/AdminController");

//Series

router.get("/series", AdminController.GetSerieAdminIndex);
router.get("/add-serie", AdminController.GetAddSerie);
router.get("/edit-serie/:serieId", AdminController.GetEditSerie);
router.post("/add-serie", AdminController.PostAddSerie);
router.post("/edit-serie", AdminController.PostEditSerie);
router.post("/serie-delete", AdminController.PostSerieDelete);


//Generos

router.get("/genres", AdminController.GetGenreAdminIndex);
router.get("/add-genre", AdminController.GetAddGenre);
router.get("/edit-genre/:genreId", AdminController.GetEditGenre);
router.post("/add-genre", AdminController.PostAddGenre);
router.post("/edit-genre", AdminController.PostEditGenre);
router.post("/genre-delete", AdminController.PostGenreDelete);

module.exports = router;