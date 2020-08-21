'use strict';

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function average(scores) {
  return total(scores) / scores.length;
}

function total(scores) {
  return scores.reduce((acc, current) => acc + current);
}

function percentGrade(examAverage, exerciseTotal) {
  return Math.round((examAverage * .65) + (exerciseTotal * .35));
}

function minimum(scores) {
  return scores.reduce((accumulator, currentValue) => {
    if (currentValue < accumulator) {
      accumulator = currentValue;
    }
    return accumulator;
  });
}

function maximum(scores) {
  return scores.reduce((accumulator, currentValue) => {
    if (currentValue > accumulator) {
      accumulator = currentValue;
    }
    return accumulator;
  });
}

function letterGrade(percentGrade) {
  if (percentGrade >= 93) {
    return 'A';
  } else if (percentGrade >= 85) {
    return 'B';
  } else if (percentGrade >= 77) {
    return 'C';
  } else if (percentGrade >= 69) {
    return 'D';
  } else if (percentGrade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function getStudentGrades(scores) {
  let students = Object.keys(scores);
  return students.map(student => {
    let examScores = scores[student].scores.exams;
    let exerciseScores = scores[student].scores.exercises;

    let percent = percentGrade(average(examScores), total(exerciseScores));
    let letter = letterGrade(percent);

    return `${percent} (${letter})`;
  });
}

function getExamSummary(scores) {
  let students = Object.keys(scores);
  let exams = [];

  const NUMBER_OF_EXAMS = 4;
  for (let index = 0; index < NUMBER_OF_EXAMS; index += 1) {
    exams[index] = [];

    for (let subIndex = 0; subIndex < students.length; subIndex += 1) {
      let student = students[subIndex];
      exams[index].push(scores[student].scores.exams[index]);
    }
  }

  exams = exams.map(examScores => {
    return {
      average: average(examScores),
      minimum: minimum(examScores),
      maximum: maximum(examScores),
    };
  });

  return exams;
}


function generateClassRecordSummary(scores) {
  let studentGrades = getStudentGrades(scores);
  let examSummary = getExamSummary(scores);

  let summary = {
    studentGrades: studentGrades,
    exams: examSummary,
  };

  return summary;
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }