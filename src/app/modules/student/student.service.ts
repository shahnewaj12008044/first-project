import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error("Student is already exist bro");
  }
  const result = await Student.create(studentData); //built in static method

  //for custom static:

  //{  // //built in instance method
  // const student = new Student(studentData);//create an instance

  // if(await student.isUserExists(studentData.id)){
  //   throw new Error('student is already exist')
  // }

  // const result = await student.save();}

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getAStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id: id });
  return result;
};
const deleteAStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getAStudentFromDB,
  deleteAStudentFromDB,
};
