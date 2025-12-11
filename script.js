function calculate() {
  // get marks
  let m1 = Number(document.getElementById('sub1').value) || 0;
  let m2 = Number(document.getElementById('sub2').value) || 0;
  let m3 = Number(document.getElementById('sub3').value) || 0;
  let m4 = Number(document.getElementById('sub4').value) || 0;
  let m5 = Number(document.getElementById('sub5').value) || 0;

  let total = m1 + m2 + m3 + m4 + m5;
  let avg = total / 5;   // use avg (not average) because you use avg below

  let grade;
  if (avg >= 90) {
    grade = "A";
  } else if (avg >= 80) {
    grade = "B";
  } else if (avg >= 70) {
    grade = "C";
  } else if (avg >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  document.getElementById('total').textContent = "Total Marks: " + total;
  document.getElementById('average').textContent = "Average Marks: " + avg.toFixed(2);
  document.getElementById('grade').textContent = "Grade: " + grade;
}
