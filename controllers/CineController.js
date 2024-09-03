const SerieModel = require("../models/Serie");
const GenreModel = require("../models/Genre");


exports.GetSerieIndex = (req, res, next) => {
  SerieModel.GetAll((series) => {
    GenreModel.GetAll((genres) => {
      res.render("cine/index", {
        pageTitle: "Gestor de Cine",
        series: series,
        hasSeries: series.length > 0,
        genres: genres,
        hasGenres: genres.length > 0,
      });
    });
  });
};

exports.GetSerie = (req, res, next) => {
  const id = req.params.serieId;

  SerieModel.GetById(id, (serie) => {
    GenreModel.GetAll((genres) => {
      res.render("cine/serie-detail", {
        pageTitle: `Serie - ${serie?.title}`,
        serie: serie,
        hasSeries: serie ? true : false,
        genres: genres,
        hasGenres: genres.length > 0,
      });
    });
  });
};

exports.GetGenreIndex = (req, res, next) => {
  GenreModel.GetAll((genres) => {
    res.render("cine/index", {
      pageTitle: "Gestor de Cine",
      genres: genres,
      hasGenres: genres.length > 0,
    });
  });
};

exports.GetGenre = (req, res, next) => {
  const id = req.params.genreId;

  GenreModel.GetById(id, (genre) => {
    res.render("cine/genre-detail", {
      pageTitle: `Genre - ${genre?.title}`,
      genre: genre,
      hasGenres: genre ? true : false,
    });
  });
};

exports.SearchSeries = (req, res, next) => {
  const title = req.query.title.toLowerCase();
  SerieModel.GetAll((series) => {
      const seriesFiltradas = series.filter(serie => serie.title.toLowerCase().includes(title));
      GenreModel.GetAll((genres) => {
          res.render("cine/index", {
              pageTitle: "Series - Search",
              series: seriesFiltradas,
              hasSeries: seriesFiltradas.length > 0,
              genres: genres,
          });
      });
  });
};

exports.FilterSeries = (req, res, next) => {
  const genre = req.query.genre;
  SerieModel.GetAll((series) => {
      const seriesFiltradas = series.filter(serie => serie.genre === genre);
      GenreModel.GetAll((genres) => {
          res.render("cine/index", {
              pageTitle: "Genre - Filter",
              series: seriesFiltradas,
              hasSeries: seriesFiltradas.length > 0,
              genres: genres,
          });
      });
  });
};
