import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiGatewayService } from './app.service';
import { CreateUserDTO } from './dtos';
import {
  ApiBody,
  ApiExcludeEndpoint,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserResponseDTO } from './dtos/user/response-user.dto';

@Controller('gateway')
export class ApiGatewayController {
  constructor(private readonly appService: ApiGatewayService) {}

  @Get()
  @ApiExcludeEndpoint(true)
  public getApiVersion(): string {
    return this.appService.getApiVersion();
  }

  @Get('products')
  @ApiTags('Productos')
  public async getProductos(@Query('query') query: string) {
    return this.appService.getProducts(query);
  }

  @Get('categories')
  @ApiTags('Categorias')
  public async getCategorias() {
    return this.appService.getCategories();
  }

  @Get('product-detail/:id')
  @ApiTags('Productos')
  public async getProductDetail(@Param('id') id: string) {
    return this.appService.getProductDetail(id);
  }

  @Post('users')
  @ApiBody({
    type: CreateUserDTO,
    description: 'Json structure for user object',
  })
  @ApiTags('Usuarios')
  public async createUser(@Body() createUserDto: CreateUserDTO) {
    return this.appService.createUser(createUserDto);
  }

  @Get('users')
  @ApiTags('Usuarios')
  @ApiOkResponse({ type: UserResponseDTO, isArray: true })
  public async findAllUsers(): Promise<UserResponseDTO[]> {
    return this.appService.findAllUsers();
  }

  @Get('users/:id')
  @ApiTags('Usuarios')
  @ApiOkResponse({ type: UserResponseDTO })
  public async findOneUser(@Param('id') id: string): Promise<UserResponseDTO> {
    return this.appService.findOneUser(id);
  }
}
