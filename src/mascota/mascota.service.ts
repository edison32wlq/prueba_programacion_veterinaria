import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mascota } from './mascota.entity';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Injectable()
export class MascotasService {
  constructor(
    @InjectRepository(Mascota)
    private readonly mascotaRepository: Repository<Mascota>,
  ) {}

  create(createMascotaDto: CreateMascotaDto) {
    const mascota = this.mascotaRepository.create(createMascotaDto);
    return this.mascotaRepository.save(mascota);
  }

  findAll() {
    return this.mascotaRepository.find();
  }

  findOne(id: string) {
    return this.mascotaRepository.findOne({ where: { id } });
  }

  async update(id: string, updateMascotaDto: UpdateMascotaDto) {
    const mascota = await this.mascotaRepository.findOne({ where: { id } });
    if (!mascota) return null;
    Object.assign(mascota, updateMascotaDto);
    return this.mascotaRepository.save(mascota);
  }

  async remove(id: string) {
    const mascota = await this.mascotaRepository.findOne({ where: { id } });
    if (!mascota) return null;
    return this.mascotaRepository.remove(mascota);
  }
}
