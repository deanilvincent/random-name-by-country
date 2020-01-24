function randomName(country, gender, nameType) {
    if(!country){
        console.log('Country parameter is missing.')
    }
    if(!gender){
        console.log('Gender parameter is missing.')
    }
    if(!nameType){
        console.log('Name type parameter is missing.')
    }
    
    const names = require(`./by-country/${country.toUpperCase()}/${gender.toUpperCase()}/${nameType.toLowerCase}`);

    const values = Object.values(names.default);

    const randomValue = values[parseInt(Math.random() * values.length)];

    return randomValue.Name;
}

module.exports.randomName = randomName;
