const name="NB Nill";
var marks=[10,20,30,40,50];
var total=0;

function print_sorted(marks) {
    marks.sort((a,b)=>a-b);
    // for(let i=0;i<marks.length;i++) {
    //     console.log(marks[i]);
    // }
    // using loop prints all marks in new line.

    console.log(marks.join(" "));
}



function calculate_total_marks(marks) {
    for(let i=0;i<marks.length;i++) {
        total+=marks[i];
    }

    return total;
}

console.log();
console.log("Number of courses currently on record :",marks.length);
console.log("Stage 1 - Printing all marks in ascending order : ");
print_sorted(marks);
console.log();

console.log("Stage 2 - Total marks after calcualting :",calculate_total_marks(marks));





// calculate_total_marks(marks);
