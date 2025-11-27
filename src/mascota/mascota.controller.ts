import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MascotasService } from './mascota.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Controller('mascotas')
export class MascotasController {
  constructor(private readonly mascotasService: MascotasService) {}

  @Post()
  create(@Body() createMascotaDto: CreateMascotaDto) {
    return this.mascotasService.create(createMascotaDto);
  }

  @Get()
  findAll() {
    return this.mascotasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mascotasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMascotaDto: UpdateMascotaDto) {
    return this.mascotasService.update(id, updateMascotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mascotasService.remove(id);
  }

  @Post('/dosis-total')
  dosis_total_nacimiento(@Body() dosis_total_nacimiento){
    return this.mascotasService.create(dosis_total_nacimiento);
  }

  @Post('/peso-ideal')
  controlPeso(@Body() controlPeso){
    return this.mascotasService.create(controlPeso);
  }
}
