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
let namelistJSON = XLSX.utils.sheet_to_json(namelist);
//console.log(namelistJSON[138]);

function countGenders() {
    femaleCount = 0;
    maleCount = 0;
    for(let i = 0; i < namelistJSON.length; i++) {
        const student = namelistJSON[i];
        if(student.Gender === 'Female') {
            femaleCount++;
        } else {
            maleCount++;
        }
    }
    console.log("Females: " + femaleCount);
    console.log("Males: " + maleCount);
    console.log();
    return;
}

function countFaculties() {
    let facultyCountDict = {};
    let facultyDict = {};
    for(let i = 0; i < namelistJSON.length; i++) {
        const student = namelistJSON[i];
        const facName = student.Faculty;
        if(facultyCountDict[facName]) {
            facultyCountDict[facName]++;
            facultyDict[facName].push(student.Name);
        } else {
            facultyCountDict[facName] = 1;
            facultyDict[facName] = [student.Name];
        }
    }
    for(let key in facultyCountDict) {
        console.log(key + " Count: " + facultyCountDict[key])
    }
    console.log(facultyDict["Computing"]);
    for(let key in facultyDict) {
        console.log(key + " STUDENTS: " + facultyDict[key])
        console.log()
    }
    return;
}

function countSchools() {
    let schoolCountDict = {};
    for(let i = 0; i < namelistJSON.length; i++) {
        const student = namelistJSON[i];
        const schoolName = student.School;
        if(schoolCountDict[schoolName]) {
            schoolCountDict[schoolName]++;
        } else {
            schoolCountDict[schoolName] = 1;
        }
    }
    for(let key in schoolCountDict) {
        console.log(key + " Count: " + schoolCountDict[key])
    }
    console.log();
    return;
}

/*countGenders();
countFaculties();
countSchools();*/