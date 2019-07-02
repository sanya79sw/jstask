module.exports = function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (typeof grades[i] !== 'number') return new Error();
        else if (grades[i] < 38) continue;
        else if (grades[i] % 5 >= 3) grades[i] = grades[i] + (5 - grades[i] % 5);
    }
    return grades;
}