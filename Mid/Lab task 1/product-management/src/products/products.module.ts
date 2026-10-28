// import the Module decorator from NestJS
import { Module } from '@nestjs/common';
// import the controller and service we generated earlier
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
// import the TypeOrmModule to connect our database entity
import { TypeOrmModule } from '@nestjs/typeorm';
// import our Product entity
import { Product } from './entities/product.entity';

// this decorator registers all the parts of our products feature
@Module({
  // we import TypeOrmModule.forFeature to tell NestJS that this module uses the Product entity
  imports: [TypeOrmModule.forFeature([Product])],
  // we register the controller and service so NestJS knows they belong here
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}