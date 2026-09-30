const name="Asa";
let mark = 70;
console.log(name);

if(mark>=50) {
    console.log("pass");
} else if(mark>=80) {
    console.log("A+");
} else {
    console.log("Fail");
}


// array
const marks = [40, 50, 70]; // if let mark then it will be an error because mark is already declared as a variable, but if in the beginning it was var mark then it will not be an error because var is function scoped and can be redeclared, but let and const are block scoped and cannot be redeclared in the same scope.
for(let i=0; i<marks.length; i++) { // if const i=0 then it will be an error because const cannot be reassigned
    console.log(marks[i]);
}



// function
function getResult(mark) {
    if(mark>=60) {
        return "Hello";
    } return "Fail";
}

console.log(getResult(75));
console.log(getResult(35));

const student={
    sname:"Nill",
    sage:26,
    sdept:"CSE",
    marks:78,

    showClassResult() {
        if(this.marks>=50) {
            return this.sname+"Passed";
        } 
        return this.sname+"Failed";
    }
}