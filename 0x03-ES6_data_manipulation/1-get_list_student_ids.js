const getListStudentIds = (getListStudents) => {
  let listid = [];
  if (!(getListStudents instanceof Array)) {
    return listid;
  }
  listid = getListStudents.map((student) => student.id);
  return listid;
};
export default getListStudentIds;
