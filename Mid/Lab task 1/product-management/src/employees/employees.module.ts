// import the Module decorator from NestJS
import { Module } from '@nestjs/common';
// import the controller and service we generated earlier
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
// import the TypeOrmModule to connect our database entity
import { TypeOrmModule } from '@nestjs/typeorm';
// import our Employee entity
import { Employee } from './entities/employee.entity';




// this decorator registers all the parts of our employees feature
@Module({
  // we import TypeOrmModule.forFeature to tell NestJS that this module uses the Employee entity
  imports: [TypeOrmModule.forFeature([Employee])],
  // we register the controller and service so NestJS knows they belong here
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}