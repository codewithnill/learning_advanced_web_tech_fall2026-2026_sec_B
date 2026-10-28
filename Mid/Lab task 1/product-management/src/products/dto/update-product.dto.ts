// import PartialType from NestJS to make all the properties of our DTO optional
import { PartialType } from '@nestjs/mapped-types';
// import the CreateProductDto we just made
import { CreateProductDto } from './create-product.dto';

// this class inherits all the fields from CreateProductDto but makes them optional
// this means a client can send just the 'price' to update it, without having to send the 'name' or 'category'
export class UpdateProductDto extends PartialType(CreateProductDto) {}