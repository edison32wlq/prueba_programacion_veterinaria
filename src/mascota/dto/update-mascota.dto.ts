import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMascotaDto {
  @IsString()
  nombre: string;

  @IsString()
  especie: string;

  @IsString()
  raza: string;

  @IsString()
  color: string;

  @IsDate()
  fecha_nacimiento: Date;

  @IsNumber()
  peso_kg: number;

  @IsString()
  nombre_duenio: string;

  @IsString()
  telefono_duenio: string;

  @IsString()
  email_duenio: string;

  @IsBoolean()
  estado: boolean;
}
