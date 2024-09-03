const SerieModel = require("../models/Serie");
const GenreModel = require("../models/Genre");

//Series

exports.GetSerieAdminIndex = (req, res, next) => {
  SerieModel.GetAll((series) => {
    res.render("admin/serie-list", {
      pageTitle: "Serie Admin",
      sers: series,
      hasSeries: series.length > 0,
      IsSerieList: true,
    });
  });
};

exports.GetAddSerie = (req, res, next) => {
  GenreModel.GetAll((genres) => {
    res.render("admin/save-serie", {
      pageTitle: "Add Serie",
      editMode: false,
      genres: genres
    });
  });
};

exports.GetEditSerie = (req, res, next) => {
  const id = req.params.serieId;

  SerieModel.GetById(id, (serie) => {

    if(!serie){
      return res.redirect("/admin/series");
    }

    GenreModel.GetAll((genres) => {
      res.render("admin/save-serie", {
        pageTitle: `Edit - ${serie?.title}`,
        serie: serie,
        editMode: true,
        genres: genres
      });
    });
  });
};

exports.PostAddSerie = (req, res, next) => {
  const title = req.body.Title;
  const image = req.body.Image;
  const genre = req.body.Genre;
  const video = req.body.Video;

  const serie = new SerieModel(null, title, image, genre, video);
  serie.Save();

  res.redirect("/admin/series");
};

exports.PostEditSerie = (req, res, next) => {
  const id = req.body.SerieId;
  const title = req.body.Title;
  const image = req.body.Image;
  const genre = req.body.Genre;
  const video = req.body.Video;

  const serie = new SerieModel(id, title, image, genre, video);
  serie.Save();

  res.redirect("/admin/series");
};

exports.PostSerieDelete = (req, res, next) => {
  const serieId = req.body.SerieId;
  SerieModel.Delete(serieId);

  res.redirect("/admin/series");
};


//Genres

exports.GetGenreAdminIndex = (req, res, next) => {
  GenreModel.GetAll((genres) => {
    res.render("admin/genre-list", {
      pageTitle: "Genre Admin",
      genrs: genres,
      hasGenres: genres.length > 0,
      IsGenreList: true,
    });
  });
};

exports.GetAddGenre = (req, res, next) => {
  res.render("admin/save-genre", {
    pageTitle: "Add genre",
    editMode: false,
  });
};

exports.GetEditGenre = (req, res, next) => {
  const id = req.params.genreId;

  GenreModel.GetById(id, (genre) => {

    if(!genre){
      return res.redirect("/admin/genres");
    }

    res.render("admin/save-genre", {
      pageTitle: `Edit - ${genre?.title} `,
      genre: genre,
      editMode: true,
    });
  });
};

exports.PostAddGenre = (req, res, next) => {
  const title = req.body.Title;

  const genre = new GenreModel(null, title);
  genre.Save();

  res.redirect("/admin/genres");
};

exports.PostEditGenre = (req, res, next) => {
  const id = req.body.GenreId;
  const title = req.body.Title;

  const genre = new GenreModel(id, title);
  genre.Save();

  res.redirect("/admin/genres");
};

exports.PostGenreDelete = (req, res, next) => {
  const genreId = req.body.GenreId;
  GenreModel.Delete(genreId);

  res.redirect("/admin/genres");
};