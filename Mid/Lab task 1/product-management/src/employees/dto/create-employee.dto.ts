// this class defines the exact shape of the data we expect when a client wants to create a new employee
export class CreateEmployeeDto {
  // the full name of the employee
  name: string;


  // the email address of the employee
  email: string;


  // the phone number of the employee
  phone: string;


  // the dummy password of the employee
  password: string;


  // the age of the employee
  age: number;


  
  // the number of completed years of work experience
  yearsOfWorking: number;
}