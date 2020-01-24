function randomName(country, gender, nameType) {
  const jsonfile = require("jsonfile");
  const file = `by-country/${country}/${gender}/${nameType}.json`;

  jsonfile.readFile(file, function(err, obj) {
    if (err) console.error(err);
    const values = Object.values(obj);
    const randomValue = values[parseInt(Math.random() * values.length)];
    return randomValue.Name;
  });
}

module.exports.randomName = randomName;
