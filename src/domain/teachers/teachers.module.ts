import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MattersEntity } from 'src/domain/matters/entities/Matters.entity';
import { TeachersEntity } from './entities/Teachers.entity';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';

@Module({
  imports: [ TypeOrmModule.forFeature([ TeachersEntity, MattersEntity ])],
  controllers: [TeachersController],
  providers: [TeachersService]
})
export class TeachersModule {}
