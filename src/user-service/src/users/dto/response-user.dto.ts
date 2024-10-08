import { Exclude, Expose } from 'class-transformer';

export class UserResponseDTO {
  @Expose()
  name: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;
}
