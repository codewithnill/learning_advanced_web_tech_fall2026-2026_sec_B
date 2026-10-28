// import the Injectable decorator to let NestJS know this is a provider
import { Injectable, NotFoundException } from '@nestjs/common';
// import the InjectRepository decorator and Repository class from TypeORM
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import our Product entity and the DTOs we created
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';






// this decorator makes this class available for Dependency Injection
@Injectable()
export class ProductsService {
  // we inject the Product repository so we can perform database operations
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}




  // this method creates a new product and saves it to the database
  async create(createProductDto: CreateProductDto): Promise<Product> {
    // we create a new Product instance using the data sent by the client
    const newProduct = this.productRepository.create(createProductDto);
    // we save it to the database and return the saved record (which includes the generated id)
    return await this.productRepository.save(newProduct);
  }





  // this method returns a list of all products in the database
  async findAll(): Promise<Product[]> {
    // find() retrieves all rows from the products table
    return await this.productRepository.find();
  }





  // this method finds one specific product by its id
  async findOne(id: number): Promise<Product> {
    // findOneBy searches for a product with the matching id
    const product = await this.productRepository.findOneBy({ id });
    
    // if no product is found, we throw a 404 error to tell the client it doesn't exist
    if (!product) {
      throw new NotFoundException(`product with id ${id} not found`);
    }
    // if found, we return the product
    return product;
  }




  // this method updates an existing product
  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    // we first check if the product exists (this will throw a 404 if it doesn't)
    await this.findOne(id);
    // we merge the new data into the existing product record in the database
    await this.productRepository.update(id, updateProductDto);
    // we fetch and return the updated record so the client sees the new values
    return await this.findOne(id);
  }


  

  // this method deletes a product from the database
  async remove(id: number): Promise<{ message: string }> {
    // we check if the product exists before attempting to delete it
    await this.findOne(id);
    // we delete the record from the database
    await this.productRepository.delete(id);
    // we return a success message
    return { message: `product with id ${id} has been deleted` };
  }
}