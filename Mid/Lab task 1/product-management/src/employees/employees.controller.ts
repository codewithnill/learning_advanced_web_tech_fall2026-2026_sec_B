// import the decorators we need to handle HTTP requests
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
// import the service and DTOs we created
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';




// this decorator sets the base route for this controller to /employees
@Controller('employees')
export class EmployeesController {
  // we inject the EmployeesService so we can call its methods
  constructor(private readonly employeesService: EmployeesService) {}




  // this handles POST /employees requests to create a new employee
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    // we pass the request body to the service to save it in the database
    return this.employeesService.create(createEmployeeDto);
  }





  // this handles GET /employees requests to get all employees
  @Get()
  findAll() {
    // we ask the service to return all employees from the database
    return this.employeesService.findAll();
  }




  // this handles GET /employees/:id requests to get a single employee
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    // ParseIntPipe converts the URL text "1" into the number 1
    // we pass the id to the service to find the specific employee
    return this.employeesService.findOne(id);
  }




  // this handles PATCH /employees/:id requests to update an employee
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    // we pass the id and the new data to the service to update the record
    return this.employeesService.update(id, updateEmployeeDto);
  }


  

  // this handles DELETE /employees/:id requests to delete an employee
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    // we pass the id to the service to delete the record
    return this.employeesService.remove(id);
  }
}