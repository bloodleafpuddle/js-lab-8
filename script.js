//pt1

const student = {
name: "Autumn GM",
age: 22,
enrolled: true,
courses: ["JavaScript", "Web Development", "Algorithms"],

displayInfo() {
return `Student: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses}.`;
    }
};

console.log(`Name: ${student.name}, Age: ${student.age}`);
console.log("displayInfo():", student.displayInfo());

//pt2

const jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

const parsedStudent = JSON.parse(jsonString);
console.log("JS Object:", parsedStudent);

//pt3

const { name, courses } = student;

console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;

console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);

//pt4

const studentClone = {
    ...student,
    graduationYear: 2027
};
console.log("Cloned Myself:", studentClone);

const extraCourses = ["Operating Systems", "Databases"];
const mergedCourses = [...student.courses, ...extraCourses];

console.log("Merged Courses:", mergedCourses);

//pt5

student.addCourse = function(newCourse) {
    this.courses.push(newCourse);
};

student.totalCourses = function() {
    return this.courses.length;
};

student.addCourse("WRIT 120");
console.log("Courses After Adding:", student.courses);

console.log("Total Courses:", student.totalCourses());

//bonus

const totalScore = scores.reduce((sum, next) => sum + next, 0);
const averageScore = totalScore / scores.length;

console.log("Average Score:", averageScore);