// importing the tools we need from TypeORM to define a database table
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// this @Entity decorator tells NestJS: "create a database table named 'products'"
@Entity('products')
export class Product {
  
  // this tells the database: "create an 'id' column that automatically generates a unique number for every new product"
  @PrimaryGeneratedColumn()
  id: number;

  // this tells the database: "create a 'name' column that stores text"
  @Column()
  name: string;

  // this tells the database: "create a 'category' column that also stores text"
  @Column()
  category: string;

  // this tells the database: "create a 'price' column for decimal numbers (like 99.99). set a max limit of 10 digits, with 2 digits after the decimal point"
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  // this tells the database: "create a 'quantity' column that stores whole numbers (integers)"
  @Column('int')
  quantity: number;
}