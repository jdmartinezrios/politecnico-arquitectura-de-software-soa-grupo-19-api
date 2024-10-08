import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserResponseDTO } from './dto/response-user.dto';
import { plainToInstance } from 'class-transformer';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public create(@Body() createUserDto: CreateUserDTO) {
    return this.userService.create(createUserDto);
  }

  @Get()
  public async findAll(): Promise<UserResponseDTO[]> {
    const users = await this.userService.findAll();
    return plainToInstance(UserResponseDTO, users);
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<UserResponseDTO> {
    const user = await this.userService.findOne(+id);
    return plainToInstance(UserResponseDTO, user);
  }

  @Put(':id')
  public update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDTO) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
