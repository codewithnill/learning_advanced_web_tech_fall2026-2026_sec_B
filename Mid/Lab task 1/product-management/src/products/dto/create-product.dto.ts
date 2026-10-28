// this class defines the exact shape of the data we expect when a client wants to create a new product
export class CreateProductDto {
  // the name of the product must be a string (text)
  name: string;

  // the category of the product must be a string (text)
  category: string;

  // the price must be a number
  price: number;

  // the quantity must be a number (we expect a whole integer here, but we type it as number)
  quantity: number;
}