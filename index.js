function randomName(country, gender, nameType) {
  const errorMsg = "Invalid: check console log error.";
  if (!country) {
    console.error("random-name-by-country: Country parameter is missing.");
    return errorMsg;
  }
  if (!gender) {
    console.error("random-name-by-country: Gender parameter is missing.");
    return errorMsg;
  }
  if (!nameType) {
    console.error("random-name-by-country: Name type parameter is missing.");
    return errorMsg;
  }

  country = country.toUpperCase()
  gender = gender.toUpperCase()
  nameType = nameType.toLowerCase()

  let names = [];
  if (nameType === "sn") {
    names = require(`./by-country/${country}/${nameType}`);
  } else {
    names = require(`./by-country/${country}/${gender}/${nameType}`);
  }

  const values = Object.values(names.default);

  const randomValue = values[parseInt(Math.random() * values.length)];

  return randomValue.Name;
}

module.exports.randomName = randomName;
