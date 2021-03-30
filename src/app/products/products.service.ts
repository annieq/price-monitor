export class ProductsService {

    private products = ["product1", 'product2'];

    getProducts() {
        return this.products;
    }
}