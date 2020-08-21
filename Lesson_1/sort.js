function compareScores(score1, score2) {
  if (score1 < score2) {
    return -1;
  } else if (score1 > score2) {
    return 1;
  } else {
    return 0;
  }
}

let scores = [5, 88, 50, 9, 60, 99, 12, 23];
scores.sort(compareScores);
console.log(scores);