// Initialize an empty array to store the student data
const students = [];

// Loop through each student
for (let i = 1; i <= 5; i++) {
  // Prompt the user to enter the student's name
  const Name = prompt(`Enter the name of student ${i}:`);

  // Prompt the user to enter the class participation grades
  const enablingAssessments = [];
  for (let x = 1; x <= 5; x++) {
    enablingAssessments.push(Number(prompt(`Enter enabling assessment ${x} for ${name}:`)));
  }
  const classParticipation = enablingAssessments.reduce((sum, grade) => sum + grade, 0) / enablingAssessments.length;

  // Prompt the user to enter the summative assessment grades
  const summativeAssessments = [];
  for (let x = 1; x <= 3; x++) {
    summativeAssessments.push(Number(prompt(`Enter summative assessment ${x} for ${name}:`)));
  }
  const summativeGrade = summativeAssessments.reduce((sum, grade) => sum + grade, 0) / summativeAssessments.length;

  // Prompt the user to enter the final examination grade
  const finalExam = Number(prompt(`Enter final examination grade for ${name}:`));

  // Calculate the final grade for the student
  const grade = (classParticipation * 0.3) + (summativeGrade * 0.3) + (finalExam * 0.4);

  // Determine the letter grade based on the final grade
  let letterGrade;
  if (grade >= 90) {
    letterGrade = "A";
  } else if (grade >= 80) {
    letterGrade = "B";
  } else if (grade >= 70) {
    letterGrade = "C";
  } else if (grade >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  // Add the student's data to the array
  students.push({
    Name,
    classParticipation,
    summativeGrade,
    finalExam,
    grade,
    letterGrade,
  });
}

// Display the data for each student in a table
console.table(students);
