# Random Names by Country

## Overview
A simple NPM package for generating random names by country. 

## Installation
`npm i random-name-by-country --save`

## Basic Usage
```
const  { randomName }  =  require("random-name-by-country");

console.log(randomName('US','M','full')); 
// John Doe

console.log(randomName('US','M','fn')); 
// John

console.log(randomName('US','M','sn')); 
// Doe
```
## Info
|1st Param| 2nd Param | 3rd Param |
|--|--|--|
| Country Abbreviation | Gender | Name type |

#### List of Option Parameters (either lowercase or uppercase)

##### Country (1st param) - I'll add more countries soon.
 - **US** - USA
 - **MX** - Mexico
##### Gender (2nd param)
- **M** - Male
- **F** - Female
- **MF** - Random Male & Female
##### Name type (3rd param)
- **fn** - Firstname
- **sn** - Surname
- **full** - Full name

Feel free to clone or fork this project:  `https://github.com/deanilvincent/random-name-by-country.git`

### License

This project is licensed under the MIT License - see the  [LICENSE.md](https://github.com/deanilvincent/random-name-by-country/blob/master/LICENSE) file for details.