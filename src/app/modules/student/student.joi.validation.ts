import Joi from 'joi'


const userNameValidationSchema = Joi.object({
    firstName: Joi.string()
      .trim()
      .max(20)
      .required()
      .regex(/^[A-Z][a-z]*$/)
      .messages({
        'string.empty': 'First Name is required',
        'string.max': 'First name can not be more than 20 characters',
        'string.pattern.base': '{#label} must be capitalized',
      }),
    middleName: Joi.string().trim().allow(''),
    lastName: Joi.string()
      .trim()
      .required()
      .pattern(/^[A-Za-z]+$/)
      .messages({
        'string.empty': 'Last Name is required',
        'string.pattern.base': '{#label} is not valid',
      }),
  });
  
  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required().messages({
      'string.empty': 'Father Name is required',
    }),
    fatherOccupation: Joi.string().allow(''),
    fatherContactNo: Joi.string().required().messages({
      'string.empty': 'Contact number is required',
    }),
    motherName: Joi.string().trim().required().messages({
      'string.empty': 'Mother Name is required',
    }),
    motherOccupation: Joi.string().trim().allow(''),
    motherContactNo: Joi.string().trim().required().messages({
      'string.empty': 'Contact No is required',
    }),
  });
  
  const localGuardianValidationSchema = Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'Name is required',
    }),
    occupation: Joi.string().allow(''),
    contactNo: Joi.string().required().messages({
      'string.empty': 'Contact No is required',
    }),
    address: Joi.string().required().messages({
      'string.empty': 'Address is required',
    }),
  });
  
  const studentValidationSchema = Joi.object({
    id: Joi.string().trim().required().messages({
      'string.empty': 'ID is required',
    }),
    name: userNameValidationSchema.required().messages({
      'any.required': 'Name is required',
    }),
    gender: Joi.string()
      .valid('male', 'female', 'other')
      .required()
      .messages({
        'any.only': '{#label} is not supported',
        'string.empty': 'Gender is required',
      }),
    dateOfBirth: Joi.string().allow(''),
    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.empty': 'Email is required',
        'string.email': '{#label} is not a valid email',
      }),
    contactNo: Joi.string().required().messages({
      'string.empty': 'Contact no is required',
    }),
    emergencyContactNo: Joi.string().required().messages({
      'string.empty': 'Emergency Contact No is required',
    }),
    BloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').allow(''),
    presentAdress: Joi.string().required().messages({
      'string.empty': 'Present Address is required',
    }),
    permanentAdress: Joi.string().required().messages({
      'string.empty': 'Permanent Address is required',
    }),
    guardian: guardianValidationSchema.required().messages({
      'any.required': 'Guardian info is required',
    }),
    localGuardian: localGuardianValidationSchema.required().messages({
      'any.required': 'Local guardian is required',
    }),
    profileImage: Joi.string().allow(''),
    isActive: Joi.string()
      .valid('active', 'blocked')
      .required()
      .messages({
        'any.only': "The isActive field can only be one of the following 'active' or 'blocked'",
        'string.empty': 'The isActive field is required',
      }),
  });


    export default  studentValidationSchema ;
  