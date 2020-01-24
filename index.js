function randomName(country, gender, nameType) {
  const loadJsonFile = require("load-json-file");
  const file = `by-country/${country}/${gender}/${nameType}.json`;

  (async () => {
    const values = Object.values(await loadJsonFile(file));
    const randomValue = values[parseInt(Math.random() * values.length)];
    return randomValue.Name;
  })();
}

module.exports.randomName = randomName;
