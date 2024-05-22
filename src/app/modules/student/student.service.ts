import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student);//built in static method

  //built in instance method
  const student = new Student(studentData);//create an instance
  if(await student.isUserExists(studentData.id)){
    throw new Error('student is already exist')
  }

  const result = await student.save();

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

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getAStudentFromDB,
};
