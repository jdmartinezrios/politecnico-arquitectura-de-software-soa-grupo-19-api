import { Test, TestingModule } from '@nestjs/testing';
import { ApiGatewayController } from './app.controller';
import { ApiGatewayService } from './app.service';

describe('AppController', () => {
  let appController: ApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiGatewayController],
      providers: [ApiGatewayService],
    }).compile();

    appController = app.get<ApiGatewayController>(ApiGatewayController);
  });

  describe('root', () => {
    it('should return "api-gateway"', () => {
      expect(appController.getApiVersion()).toBe('api-gateway');
    });
  });
});
