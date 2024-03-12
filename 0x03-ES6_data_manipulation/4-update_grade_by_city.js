const updateStudentGradeByCity = (students, city, newGrades) => {
  const lists = students.filter((person) => person.location === city);
  const finaloperation = lists.map((studentgrade) => {
    const filtergrade = newGrades.filter((grade) => grade.studentId === studentgrade.id);
    if (filtergrade.length > 0) {
      return {
        ...studentgrade,
        grade: filtergrade[0].grade,
      };
    }

    return {
      ...studentgrade,
      grade: 'N/A',
    };
  });
  return finaloperation;
};
export default updateStudentGradeByCity;
