//UC1 - Check Employee is present or absent
const PRESENT_THRESHOLD = 0.5;
let status = Math.random() >= PRESENT_THRESHOLD ? "Present" : "Absent";
console.log(status);

//UC2 - Calculate Daily Wage based on part time or full time
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

let empHours;
switch (Math.floor(Math.random() * 3)) {
    case 1:
        empHours = PART_TIME_HOURS;
        break;
    case 2:
        empHours = FULL_TIME_HOURS;
        break;
    default:
        empHours = 0;
}

let dailyWage = empHours * WAGE_PER_HOUR;
console.log(`Daily Wage: $${dailyWage}`);

//UC3 
function getWorkHours() {
    switch (Math.floor(Math.random() * 3)) {
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let empHours = getWorkHours();
let dailyWage = empHours * WAGE_PER_HOUR;
console.log(`Daily Wage: $${dailyWage}`);
