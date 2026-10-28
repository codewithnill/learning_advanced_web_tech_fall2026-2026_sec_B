// import PartialType from NestJS to make all the properties of our DTO optional
import { PartialType } from '@nestjs/mapped-types';
// import the CreateEmployeeDto we just made
import { CreateEmployeeDto } from './create-employee.dto';

// this class inherits all the fields from CreateEmployeeDto but makes them optional
// this means a client can send just the 'email' to update it, without having to send the 'name' or other fields
export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}