import { studentServices } from "./student.service";
import { Request, Response } from "express";

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

export const StudentController = {
  createStudent,
};
