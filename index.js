function randomName(country, gender, nameType) {
    const data = [{
        'Name': 'Jessica'
    },{
        'Name': 'Jeff'
    },{
        'Name': 'Alice'
    }]

    const obj = JSON.parse(data);
    const values = Object.values(obj);

    const randomValue = values[parseInt(Math.random() * values.length)];

    return randomValue.Name;
}

module.exports.randomName = randomName;
