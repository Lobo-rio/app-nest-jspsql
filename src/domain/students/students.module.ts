import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsEntity } from './entities/students.entity';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  imports: [ TypeOrmModule.forFeature([ StudentsEntity ])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
