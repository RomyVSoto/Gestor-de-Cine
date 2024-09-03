const { FILE } = require("dns");
const fileHandler = require("../util/FileHandler");
const path = require("path");

const dataPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "series.json"
);

module.exports = class Serie {
  constructor(id, title, imageUrl, genre, videoUrl) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.genre = genre;
    this.videoUrl = videoUrl;
  }

  Save() {
    fileHandler.GetAllDataFromFile(dataPath, (series) => {
      if (this.id) {
        const editSerieIndex = series.findIndex(
          (serie) => serie.id === this.id
        );

        series[editSerieIndex] = this;
        fileHandler.SaveDataInFile(dataPath, series);
      } else {
        this.id = Math.random().toString();
        series.push(this);
        fileHandler.SaveDataInFile(dataPath, series);
      }
    });
  }

  static GetAll(cb) {
    fileHandler.GetAllDataFromFile(dataPath, cb);
  }

  static GetById(id, cb) {
    fileHandler.GetAllDataFromFile(dataPath, (series) => {
      const serie = series.find((s) => s.id === id);
      cb(serie);
    });
  }

  static Delete(id) {
    fileHandler.GetAllDataFromFile(dataPath, (series) => {
      const newSerieList = series.filter((serie) => serie.id !== id);
      fileHandler.SaveDataInFile(dataPath, newSerieList);
    });
  }
};

