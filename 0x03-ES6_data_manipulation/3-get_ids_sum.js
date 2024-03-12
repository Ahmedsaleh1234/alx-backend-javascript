const getStudentIdsSum = (students) => {
  let sum = 0;

  sum = students.reduce((acc, cuurent) => acc + cuurent.id, 0);

  return sum;
};
export default getStudentIdsSum;
