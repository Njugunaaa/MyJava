let students = [];

function addStudent(id, name, email, grade, classColor) {
  // Check if the ID already exists
  if (students.some(student => student.id === id)) {
    console.log(`Student with ID ${id} already exists.`);
    return;
  }

  students.push({
    id: id,
    name: name,
    email: email,
    grade: grade,
    classColor: classColor
  });
  console.log(`Student ${name} added successfully!`);
}

function displayStudents() {
  if (students.length === 0) {
    console.log("No students in the database.");
    return;
  }
  console.log("Student List:");
  students.forEach(student => {
    console.log(`ID: ${student.id}, Name: ${student.name}, Email: ${student.email}, Grade: ${student.grade}, Class Color: ${student.classColor}`);
  });
}

addStudent(1, "Kamau Mwangi", "kamau@example.com", "A", "Blue");
addStudent(2, "Wanjiku Njeri", "wanjiku@example.com", "B+", "Green");
addStudent(3, "Otieno Okoth", "otieno@example.com", "B", "Red");
addStudent(4, "Achieng Auma", "achieng@example.com", "A-", "Yellow");
addStudent(5, "Omondi Ouma", "omondi@example.com", "C+", "Blue");

addStudent(1, "Duplicate Student", "duplicate@example.com", "F", "Gray");

displayStudents();
