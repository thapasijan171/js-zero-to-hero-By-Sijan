const student = {
    name: 'Sheldon',
    score: 100,
    grade: 'A',
  }
  
  console.log(student)
  // { name: 'Sheldon', score: 100, grade: 'A' }
  
  delete student.score
  student.grade = 'F'
  console.log(student)
  // { name: 'Sheldon', grade: 'F' }
  
  student = {}
  // TypeError: Assignment to constant variable.
  