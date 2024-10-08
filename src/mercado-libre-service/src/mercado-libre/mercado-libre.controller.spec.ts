import { Test, TestingModule } from '@nestjs/testing';
import { MercadoLibreController } from './mercado-libre.controller';
import { MercadoLibreService } from './mercado-libre.service';

describe('MercadoLibreController', () => {
  let controller: MercadoLibreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MercadoLibreController],
      providers: [MercadoLibreService],
    }).compile();

    controller = module.get<MercadoLibreController>(MercadoLibreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
