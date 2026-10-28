// import the tools we need from TypeORM to define a database table
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';



// this @Entity decorator tells NestJS: "create a database table named 'employees'"
@Entity('employees')
export class Employee {
  


  // this tells the database: "create an 'id' column that automatically generates a unique number for every new employee"
  @PrimaryGeneratedColumn()
  id: number;



  // this tells the database: "create a 'name' column that stores text"
  @Column()
  name: string;



  // this tells the database: "create an 'email' column that stores text"
  @Column()
  email: string;



  // this tells the database: "create a 'phone' column that stores text"
  @Column()
  phone: string;



  // this tells the database: "create a 'password' column that stores text"
  // note: in a real app, we would hash this, but the lab just asks for a dummy password
  @Column()
  password: string;


  // this tells the database: "create an 'age' column that stores whole numbers"
  @Column('int')
  age: number;


  
  // this tells the database: "create a 'yearsOfWorking' column that stores whole numbers"
  @Column('int')
  yearsOfWorking: number;
}