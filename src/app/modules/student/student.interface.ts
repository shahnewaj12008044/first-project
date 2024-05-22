//step-1: create an interface (line 4-40)
//step-2 create a schema()
export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation?: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation?: string;
  motherContactNo: string;
};



export type LocalGuardian = {
  name: string;
  occupation?: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  email: string;
  gender: "male" | "female" |"other";
  dateOfBirth?: string;
  contactNo: string;
  emergencyContactNo: string;
  BloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAdress: string;
  permanentAdress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: "active" | "blocked";
};
