function randomName(country, gender, nameType) {
  var fs = require("fs");
  var obj;

  fs.readFile(`names-by-country/${country}/${gender}/${nameType}`, "utf8", function(err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    const values = Object.values(obj);

    const randomValue = values[parseInt(Math.random() * values.length)];

    return randomValue.Name;
  });
}

module.exports.randomName = randomName;