export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (arr instanceof Array) {
    const newArr = arr.filter((cts) => cts.location === city);
    return newArr.map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrades.filter((grade) => grade.studentId === student.id)
        .pop() || { grade: 'N/A' }).grade,
    }));
  }
  return [];
}
