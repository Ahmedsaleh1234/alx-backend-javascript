const getStudentsByLocation = (liststudents, city) => {
  const student = liststudents.filter((student) => student.location === city);
  return student;
};
export default getStudentsByLocation;
