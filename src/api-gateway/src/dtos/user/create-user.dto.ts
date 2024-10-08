import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({
    example: 'Juan David Martinez Rios',
    required: true,
  })
  name: string;

  @ApiProperty({
    example: 'juan.martinez@gmail.com',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: '12345678',
    required: true,
  })
  password: string;
}
