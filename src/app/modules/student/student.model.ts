import { Schema, model } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./student.interface";

//username schema
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

//Guardian schema:
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String },
  motherContactNo: { type: String, required: true },
});

//LocalGuardian schema;
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  }, //its called enum
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  BloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  presentAdress: { type: String, required: true },
  permanentAdress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: { type: String },
  isActive: {type:String,
    enum:["active", "blocked"],
    required: true
  },
});

export const StudentModel = model<Student>("Student", studentSchema);
