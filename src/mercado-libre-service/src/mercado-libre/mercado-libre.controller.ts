import { Controller, Get, Query } from '@nestjs/common';
import { MercadoLibreService } from './mercado-libre.service';

@Controller('mercado-libre')
export class MercadoLibreController {
  constructor(private readonly mercadoLibreService: MercadoLibreService) {}

  @Get('products')
  public async getProducts(@Query('query') query: string) {
    return this.mercadoLibreService.getProducts(query);
  }

  @Get('categories')
  public async getCategories() {
    return this.mercadoLibreService.getCategories();
  }

  @Get('product-detail')
  public async getProductDetail(@Query('id') id: string) {
    return this.mercadoLibreService.getProductDetail(id);
  }
}
