// import the decorators we need to handle HTTP requests
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
// import the service and DTOs we created
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';




// this decorator sets the base route for this controller to /products
@Controller('products')
export class ProductsController {
  // we inject the ProductsService so we can call its methods
  constructor(private readonly productsService: ProductsService) {}

  // this handles POST /products requests to create a new product
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    // we pass the request body to the service to save it in the database
    return this.productsService.create(createProductDto);
  }




  // this handles GET /products requests to get all products
  @Get()
  findAll() {
    // we ask the service to return all products from the database
    return this.productsService.findAll();
  }




  // this handles GET /products/:id requests to get a single product
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    // ParseIntPipe automatically converts the URL text "1" into the number 1
    // we pass the id to the service to find the specific product
    return this.productsService.findOne(id);
  }




  // this handles PATCH /products/:id requests to update a product
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateProductDto: UpdateProductDto) {
    // we pass the id and the new data to the service to update the record
    return this.productsService.update(id, updateProductDto);
  }



  

  // this handles DELETE /products/:id requests to delete a product
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    // we pass the id to the service to delete the record
    return this.productsService.remove(id);
  }
}