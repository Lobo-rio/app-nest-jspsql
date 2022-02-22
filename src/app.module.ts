import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './domain/teachers/teachers.module';
import { StudentsModule } from './domain/students/students.module';
import { CoursesModule } from './domain/courses/courses.module';

@Module({
  imports: [
    TeachersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin@',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    StudentsModule,
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
