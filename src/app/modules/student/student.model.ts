import { Schema, model } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./student.interface";

//username schema
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    trim:true,
    maxlength: [20, "First name can not be more than 20 character"],
    validate:{
      validator:function(value: String){
        const firstName = value.charAt(0).toUpperCase() + value.slice(1)//Mezba
        return firstName === value;
      },
      message:"{VALUE} is not in capitalize format"
    }
  },
  middleName: {
    type: String,
    trim:true,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    trim:true,
  },
});

//Guardian schema:
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, "First Name is required"] },
  fatherOccupation: { type: String },
  fatherContactNo: {
    type: String,
    required: [true, "Contact number is required"],
  },
  motherName: { type: String,trim:true, required: [true, "Mother Name is required"] },
  motherOccupation: { type: String,trim:true },
  motherContactNo: { type: String, trim:true,required: [true, "Contact No is required"] },
});

//LocalGuardian schema;
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, "Name is required"] },
  occupation: { type: String },
  contactNo: { type: String, required: [true, "Contact No is required"] },
  address: { type: String, required: [true, "Address is required"] },
});

const studentSchema = new Schema<Student>({
  id: { type: String,trim:true, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: [true, "Name is required"],
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      message: "{VALUE} is not supported",
    },
    required: true,
  }, //its called enum
  dateOfBirth: { type: String },
  email: { type: String, required: [true, "Email  is required"], unique: true },
  contactNo: { type: String, required: [true, "Contact no is required"] },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency Contact No is required"],
  },
  BloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  presentAdress: {
    type: String,
    required: [true, "Present Address is required"],
  },
  permanentAdress: {
    type: String,
    required: [true, "Permanent Address is required"],
  },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian info  is required"],
  },
  localGuardian: {
    type: localGuardianSchema,
    require: [true, "Local guardian is required"],
  },
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: {
      values: ["active", "blocked"],
      message:
        "The isActive field can only be one of the following 'active' or 'blocked'",
    },
    required: true,
  },
});

export const StudentModel = model<Student>("Student", studentSchema);
