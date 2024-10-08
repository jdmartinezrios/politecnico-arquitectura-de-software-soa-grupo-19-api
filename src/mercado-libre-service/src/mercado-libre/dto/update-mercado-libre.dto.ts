import { PartialType } from '@nestjs/mapped-types';
import { CreateMercadoLibreDto } from './create-mercado-libre.dto';

export class UpdateMercadoLibreDto extends PartialType(CreateMercadoLibreDto) {}
