function randomName(country, gender, nameType) {
  var readJson = require("read-package-json");
  const file = `by-country/${country}/${gender}/${nameType}.json`;
  readJson(file, console.error, false, function(er, data) {
    if (er) {
      console.error("There was an error reading the file");
      return;
    }
    console.log(data);
  });
}

module.exports.randomName = randomName;
