// import the Injectable decorator and NotFoundException
import { Injectable, NotFoundException } from '@nestjs/common';
// import the InjectRepository decorator and Repository class from TypeORM
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import our Employee entity and the DTOs we created
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';





// this decorator makes this class available for Dependency Injection
@Injectable()
export class EmployeesService {
  // we inject the Employee repository so we can perform database operations
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  // this method creates a new employee and saves it to the database
  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    // we create a new Employee instance using the data sent by the client
    const newEmployee = this.employeeRepository.create(createEmployeeDto);
    // we save it to the database and return the saved record
    return await this.employeeRepository.save(newEmployee);
  }





  // this method returns a list of all employees in the database
  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }






  // this method finds one specific employee by its id
  async findOne(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({ id });
    
    // if no employee is found, we throw a 404 error
    if (!employee) {
      throw new NotFoundException(`employee with id ${id} not found`);
    }
    return employee;
  }





  // this method updates an existing employee
  async update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    // we first check if the employee exists
    await this.findOne(id);
    // we merge the new data into the existing record in the database
    await this.employeeRepository.update(id, updateEmployeeDto);
    // we fetch and return the updated record so the client sees the new values
    return await this.findOne(id);
  }



  

  // this method deletes an employee from the database
  async remove(id: number): Promise<{ message: string }> {
    // we check if the employee exists before attempting to delete
    await this.findOne(id);
    // we delete the record from the database
    await this.employeeRepository.delete(id);
    // we return a success message
    return { message: `employee with id ${id} has been deleted` };
  }
}