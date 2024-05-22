import { studentServices } from "./student.service";
import { Request, Response } from "express";
import studentValidationSchema from "./student.validation";

//insert student data controller
const createStudent = async (req: Request, res: Response) => {
  try {
    //creating a schema validation using joi

    const { student: studentData } = req.body;
    const { error, value } = studentValidationSchema.validate(studentData);
    // console.log(error,value)
    if (error) {
      res.status(500).json({
        success: false,
        message: "something went wrong",
        error: error.details,
      });
    }
    //will call service func to get this data
    const result = await studentServices.createStudentIntoDB(studentData);
    //send response

    res.status(200).json({
      success: true,
      message: "student is created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
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
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
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
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getAstudent,
};
