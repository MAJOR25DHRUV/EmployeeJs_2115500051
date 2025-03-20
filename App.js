//UC1 - Check Employee is present or absent
const PRESENT_THRESHOLD = 0.5;
let status = Math.random() >= PRESENT_THRESHOLD ? "Present" : "Absent";
console.log(status);
