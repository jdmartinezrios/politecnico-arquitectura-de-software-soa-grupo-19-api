import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

import { CreateUserDTO, UserResponseDTO } from './dtos';

@Injectable()
export class ApiGatewayService {
  private readonly mercadoLibreServicePort = this.configService.get(
    'API_MERCADO_LIBRE_SERVICE_PORT',
  );

  private readonly userServicePort = this.configService.get(
    'API_USER_SERVICE_PORT',
  );

  private readonly userServiceUrl = `http://localhost:${this.userServicePort}/users`;
  private readonly mercadoLibreServiceUrl = `http://localhost:${this.mercadoLibreServicePort}/mercado-libre`;

  constructor(private readonly configService: ConfigService) {}

  public getApiVersion(): string {
    return 'mercado-libre-service';
  }

  public async getProducts(query: string) {
    const response = await axios.get(
      `${this.mercadoLibreServiceUrl}/products`,
      { params: { query } },
    );
    return response.data;
  }

  public async getCategories() {
    const response = await axios.get(
      `${this.mercadoLibreServiceUrl}/categories`,
    );
    return response.data;
  }

  public async getProductDetail(id: string) {
    const response = await axios.get(
      `${this.mercadoLibreServiceUrl}/product-detail`,
      { params: { id } },
    );
    return response.data;
  }

  public async createUser(createUserDto: CreateUserDTO) {
    const response = await axios.post(`${this.userServiceUrl}`, createUserDto);
    return response.data;
  }

  public async findAllUsers(): Promise<UserResponseDTO[]> {
    const response = await axios.get(`${this.userServiceUrl}`);
    return response.data;
  }

  public async findOneUser(id: string): Promise<UserResponseDTO> {
    const response = await axios.get(`${this.userServiceUrl}/${id}`);
    return response.data;
  }
}
