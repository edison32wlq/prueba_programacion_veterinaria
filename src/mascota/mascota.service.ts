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

    dosis_total_nacimiento(objeto: object){
    let lista =[];
    let dosisTotal: number = 0;
    lista.forEach((item: number,i: any)=>{
      dosisTotal = dosisTotal + item;
    })
    let mensaje : string = '';
    if(dosisTotal < 100){
      mensaje = 'Tratamiento baja intensidad';
    } else if(dosisTotal >= 100 && dosisTotal <=300){
        mensaje = 'Tratamiento moderado';
    } else {
      mensaje = 'Tratamiento fuerte, seguir observacion'
    }

    return {
      "dosisTotal": dosisTotal,
      "mensaje": mensaje
    }
  }

  controlPeso(pesoActual:number, pesoIdeal:number){
    let diferencia: number = pesoActual - pesoIdeal;
    let mensaje: string = '';

    if(diferencia > 0 ){
      mensaje = 'La mascota esta por encima del peso ideal';
    } else if (diferencia < 0){
      mensaje = 'La mascota esta por debajo del peso ideal';
    } else if (diferencia = 0){
      mensaje = 'Peso ideal alcanzado';
    }

    return {
      "diferencia": diferencia,
      "mensaje": mensaje
    }
  }


}
