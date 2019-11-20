export class Product {
    CatalogID: number;
    Name: string;
    sku: string;
    Description: string;
    Price: number;
    Quantity: number;
    imageName: string;
    image: string;
}

export class ProductDto {
    name: string;
    description: string;
    amount: number;
    quantity: number;
    images: [string];
    currency: string;
}

export function mapProductToProductDto(product: Product): ProductDto {
    const productDto = new ProductDto();
    productDto.name = product.Name;
    productDto.description = product.Description;
    productDto.amount = product.Price * 100;
    productDto.quantity = 1;
    productDto.images = ['https://protectthedough.shop/assets/images/' + product.imageName];
    productDto.currency = 'usd';
    return productDto;
}
