// on class code :
/*const studentName='Nill';

const marks=[10,20,30,40,50,60,70];
marks.push(100);

function calculate_total(marks_array) {
    let total=0;
    for (let i=0; i<marks_array.length; i++) {
        total=total+marks_array[i];
    }
    return total;
}


function calculate_average(total, count) {
    return total/count;
}



function calculate_grade(average) {
    if(average>=90) {
        return 'A';
    } else if(average>=80) {
        return 'B';
    } else if(average>=70) {
        return 'C';
    } else if(average>=60) {
        return 'D';
    } else if(average>=50) {
        return 'E';
    } else {
        return 'F';
    }
}

function calculate_result(average) {
    if (average>=50) {
        return 'pass';
    } else {
        return 'failed';
    }
}





function findHighestMark(marks_array) {
    let highest = marks_array[0];
    for (let i=1; i<marks_array.length; i++) {
        if (marks_array[i]>highest) {
            highest = marks_array[i];
        }
    }
    return highest;
}

function countPassedSubjects(marks_array) {
    let count=0;
    for (let i=0; i<marks_array.length; i++) {
        if (marks_array[i]>=50) {
            count=count + 1;
        }
    }
    return count;
}


function get_report() {
    const total=calculate_total(marks);
    const average=calculate_average(total, marks.length);
    const grade=calculate_grade(average);
    const result=calculate_result(average);

    return {
        name : studentName,
        total : total,
        average : average,
        grade : grade,
        result : result
    }; // returning multiple values
}

const report = get_report();

console.log('Student report');
console.log('name :'+report.name);
console.log('total :'+report.total);
console.log('average :'+report.average.toFixed(2)); // 2 dp
console.log('grade :'+report.grade);
console.log('result :'+report.result);
console.log('highest :'+findHighestMark(marks));
console.log('passed sub:'+countPassedSubjects(marks));

*/


// done at home
const name="NB Nill";
const courses = [
    { name: "Web Technology", mark: 10 },
    { name: "JavaScript", mark: 20 },
    { name: "Database", mark: 30 },
    { name: "Networking", mark: 40 },
    { name: "Programming", mark: 50 }
];

function calculate_grade(mark) {
    if (mark>=90) {
        return 'A';
    } else if(mark>=80) {
        return 'B';
    } else if(mark>=70) {
        return 'C';
    } else if(mark>=60) {
        return 'D';
    } else if(mark>=50) {
        return 'E';
    }
    return 'F';
}


function calculate_average(courses) {
    let total=0;
    for (let i=0; i<courses.length; i++) {
        total+=courses[i].mark;
    }

    return total/courses.length;
}


function findHighestMark(courses) {

    let topCourse = courses[0];
    for (let i=1; i<courses.length; i++) {
        if (courses[i].mark > topCourse.mark) {
            topCourse = courses[i];
        }
    }
    return topCourse;
}

function countPassedSubjects(courses) {
    let count=0;
    for (let i=0; i<courses.length; i++) {
            if (courses[i].mark>=50) {
            count++;
        }
    }

    return count;
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
const topCourse = findHighestMark(courses);
console.log(`Highest marks achieved: ${topCourse.mark} (${topCourse.name})`);
console.log();


console.log("Number of passed subjects : ", countPassedSubjects(courses));


