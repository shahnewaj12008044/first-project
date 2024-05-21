import { studentServices } from "./student.service";
import { Request, Response } from "express";

//insert student data controller
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    //will call service func to get this data
    const result = await studentServices.createStudentIntoDB(studentData);
    //send response

    res.status(200).json({
      success: true,
      message: "student is created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//get all student controller
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: "Students data are retrieved successfully.",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//get a single student controller
const getAstudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getAStudentFromDB(studentId);
    //sending response
    res.status(200).json({
      success: true,
      message: "sutdent is retrived successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getAstudent,
};
