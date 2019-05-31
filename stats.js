function Stats(){};

module.exports = Stats;

// returns female and male count
Stats.countGenders = function(arr) {
    femaleCount = 0;
    maleCount = 0;
    for(let i = 0; i < arr.length; i++) {
        const student = arr[i];
        if(student.Gender === 'Female') {
            femaleCount++;
        } else {
            maleCount++;
        }
    }
    return "Females: " + femaleCount + "\nMales:" + maleCount;
}

// returns faculty count
Stats.countFaculties = function(array) {
    let facultyCountDict = {};
    for(let i = 0; i < array.length; i++) {
        const student = array[i];
        const facName = student.Faculty;
        if(facultyCountDict[facName]) {
            facultyCountDict[facName]++;
        } else {
            facultyCountDict[facName] = 1;
        }
    }
    let facultyReport = "";
    for(let key in facultyCountDict) {
        facultyReport += (key + " Count: " + facultyCountDict[key] + "\n")
    }
    return facultyReport;
}

// returns school count
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
    let schoolReport = ""
    for(let key in schoolCountDict) {
        schoolReport += (key + " Count: " + schoolCountDict[key] + "\n")
    }
    return schoolReport;
}