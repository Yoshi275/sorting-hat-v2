var Lodash = require("./lodash.js");
// var Stats = require("./stats.js");

if(typeof require !== 'undefined') XLSX = require('xlsx');
let workbook = XLSX.readFile('fop scholaris sorting list.xlsx');
let first_sheet_name = workbook.SheetNames[0];
let namelist = workbook.Sheets[first_sheet_name]; // accesses first sheet of .xlsx file

// test out finding specific value
let address_of_cell = 'A2';
let desired_cell = namelist[address_of_cell];
let desired_value = (desired_cell ? desired_cell.v : undefined);
//console.log(desired_value);

// converts .xlsx file into JSON file
const namelistJSON = XLSX.utils.sheet_to_json(namelist);
//console.log(namelistJSON[138]);

// shuffles all names
let tempNameListJSON = Lodash.shuffle(namelistJSON);
let shuffledNameListJSON = Lodash.shuffle(tempNameListJSON);
// console.log(shuffledNameListJSON[3]);

// uses a stable sort to sort. Priority: Faculty > JC > Gender
let sortedByFacultiesJCGender = Lodash.sortBy(shuffledNameListJSON, ["Faculty", "School", "Gender"]);

// initialising houses in houses dict
// thought: in future, create function with parameter n groups, sorting array into n groups
let houses = { 
    "URSAIA":[], 
    "NOCTURNA":[],
    "IANTHE":[],
    "TRITON":[],
    "ANKAA":[],
    "SAREN":[]
}

// students added to houses by index
for(let i = 0; i < sortedByFacultiesJCGender.length; i++) {
    let student = sortedByFacultiesJCGender[i]
    if(i % 6 === 0) {
        houses["URSAIA"].push(student);
    } else if(i % 6 === 1) {
        houses["NOCTURNA"].push(student);
    } else if(i % 6 === 2) {
        houses["IANTHE"].push(student);
    } else if(i % 6 === 3) {
        houses["TRITON"].push(student);
    } else if(i % 6 === 4) {
        houses["ANKAA"].push(student);
    } else {
        houses["SAREN"].push(student);
    }
}

for(let house in houses) {
    console.log(house);
    let houseArr = houses[house];
    for(let i = 0; i < houseArr.length; i++) {
        console.log(houseArr[i].Name);
    }
    console.log("\n\n");
}
