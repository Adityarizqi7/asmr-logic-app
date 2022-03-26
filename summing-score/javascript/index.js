const student = {
    dodi: [
        {course: "Basic Tools", score: 80},
        {course: "HTML", score: 70},
        {course: "CSS", score: 88},
        {course: "SASS", score: 89},
        {course: "Javascript", score: 100},
    ],
    bryas: [
        {course: "Basic Tools", score: 80},
        {course: "HTML", score: 76},
        {course: "CSS", score: 83},
        {course: "SASS", score: 80},
        {course: "Javascript", score: 100},
    ],
    aditya: [
        {course: "Basic Tools", score: 88},
        {course: "HTML", score: 90},
        {course: "CSS", score: 98},
        {course: "SASS", score: 88},
        {course: "Javascript", score: 85},
    ],    
};

// Summing the score of each student
console.log(`\nAll the scores :`);
for (const [obj, val] of Object.entries(student)) {
    console.log(`${obj} : ${val.reduce((acc, curr) => acc + curr.score, 0)}`);
}

// Average score of each student
console.log(`\nAverage score :`);
for (const [obj, val] of Object.entries(student)) {
    console.log(`${obj} : ${val.reduce((acc, curr) => acc + curr.score, 0) / val.length}`);
}