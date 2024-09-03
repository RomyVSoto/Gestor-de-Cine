const fs = require("fs");

exports.GetAllDataFromFile = (dataPath, callback) => {
    fs.readFile(dataPath, function(error, data){
        if (error){
            callback([]);
        }
        else{
            callback(JSON.parse());
        }
    });
};

exports.SaveAllDataInFile = (dataPath, data, callback) => {
    fs.writeFile(dataPath, JSON.stringify(data), function(error){
        console.log(error);
    });
};