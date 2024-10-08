import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export class UserResponseDTO {
  @ApiProperty({
    example: 'Juan David Martinez Rios',
  })
  name: string;

  @ApiProperty({
    example: 'juan.martinez@gmail.com',
  })
  email: string;

  @ApiHideProperty()
  password: string;
}
