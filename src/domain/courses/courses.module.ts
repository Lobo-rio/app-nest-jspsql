import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsEntity } from '../students/entities/students.entity';
import { TeachersEntity } from '../teachers/entities/Teachers.entity';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { CoursesEntity } from './entities/courses.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ CoursesEntity, TeachersEntity, StudentsEntity ])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
