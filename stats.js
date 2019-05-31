function Stats(){};

module.exports = Stats;

Stats.countGenders = function(jsonfile) {
    femaleCount = 0;
    maleCount = 0;
    for(let i = 0; i < jsonfile.length; i++) {
        const student = jsonfile[i];
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

Stats.countFaculties = function(jsonfile) {
    let facultyDict = {};
    let facultyCountDict = {};
    for(let i = 0; i < jsonfile.length; i++) {
        const student = jsonfile[i];
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

Stats.countSchools = function(jsonfile) {
    let schoolCountDict = {};
    for(let i = 0; i < jsonfile.length; i++) {
        const student = jsonfile[i];
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