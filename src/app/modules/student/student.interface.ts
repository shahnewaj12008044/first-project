//step-1: create an interface (line 4-40)

import { Model } from "mongoose";

//step-2 create a schema()
export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation?: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation?: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation?: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  email: string;
  gender: "male" | "female" | "other";
  dateOfBirth?: string;
  contactNo: string;
  emergencyContactNo: string;
  BloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAdress: string;
  permanentAdress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isActive: "active" | "blocked";
};

//for creating static
export interface StudentModel extends Model<TStudent> {
  isUserExists (id: string):Promise<TStudent | null>
}




//********for creating instance
// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
