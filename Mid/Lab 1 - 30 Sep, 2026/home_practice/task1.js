const name="NB Nill";
const courses = [
    { name: "Web Technology", mark: 10 },
    { name: "JavaScript", mark: 20 },
    { name: "Database", mark: 30 },
    { name: "Networking", mark: 40 },
    { name: "Programming", mark: 50 }
];

function calculate_grade(mark) {
    if (mark >= 90) {
        return 'A';
    } else if (mark >= 80) {
        return 'B';
    } else if (mark >= 70) {
        return 'C';
    } else if (mark >= 60) {
        return 'D';
    } else if (mark >= 50) {
        return 'E';
    }
    return 'F';
}


function calculate_average(courses) {
    let total = 0;
    for (let i = 0; i < courses.length; i++) {
        total += courses[i].mark;
    }

    return total / courses.length;
}


function highest_mark(courses) {
    return courses[courses.length-1];
}

console.log();
console.log("Student:", name);
console.log("Number of courses currently on record:", courses.length);
console.log();
console.log("Course results:");
courses.sort((courseA, courseB) => courseA.mark - courseB.mark);
for (const course of courses) {
    console.log(`${course.name}: ${course.mark} marks, grade ${calculate_grade(course.mark)}`);
}

console.log();
console.log("Average:", calculate_average(courses));

console.log();
console.log("Highest marks achieved : ");




