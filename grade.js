function gradeStudent(marks) {
    let grade;
    
    if (marks > 90) {
        grade = "A";
    } else if (marks > 70 && marks <= 90) {
        grade = "B";
    } else if (marks > 50 && marks <= 70) {
        grade = "C";
    } else {
        grade = "F";
    }
    
    return `Your grade is: ${grade}`;
}

// Test the function
let studentMarks = 85;
console.log(gradeStudent(studentMarks));  // Output: Your grade is: B
