function randomName(country, gender, nameType) {
    if(!country){
        console.log('random-name-by-country: Country parameter is missing.')
        return false
    }
    if(!gender){
        console.log('random-name-by-country: Gender parameter is missing.')
        return false
    }
    if(!nameType){
        console.log('random-name-by-country: Name type parameter is missing.')
        return false
    }

    const names = require(`./by-country/${country.toUpperCase()}/${gender.toUpperCase()}/${nameType.toLowerCase()}`);

    const values = Object.values(names.default);

    const randomValue = values[parseInt(Math.random() * values.length)];

    return randomValue.Name;
}

module.exports.randomName = randomName;
