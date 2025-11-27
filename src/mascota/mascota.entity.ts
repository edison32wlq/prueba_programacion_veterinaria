import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mascotas')
export class Mascota {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  especie: string;

  @Column()
  raza: string;

  @Column()
  color: string;

  @Column()
  fecha_nacimiento: Date;

  @Column()
  peso_kg: number;

  @Column()
  nombre_duenio: string;

  @Column()
  telefono_duenio: string;

  @Column()
  email_duenio: string;

  @Column()
  estado: boolean;
}
