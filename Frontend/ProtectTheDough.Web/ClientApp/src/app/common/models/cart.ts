import { Product } from '@common/models/product';

export class Cart {
    id: number;
    products: Product[] = [];
}
