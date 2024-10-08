import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MercadoLibreService {
  private readonly apiUrl = 'https://api.mercadolibre.com';

  public async getProducts(query: string) {
    const response = await axios.get(
      `${this.apiUrl}/sites/MLA/search?q=${query}`,
    );
    return response.data;
  }

  public async getCategories() {
    const response = await axios.get(`${this.apiUrl}/sites/MLA/categories`);
    return response.data;
  }

  public async getProductDetail(id: string) {
    const response = await axios.get(`${this.apiUrl}/items/${id}`);
    return response.data;
  }
}
