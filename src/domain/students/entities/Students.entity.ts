import { CoursesEntity } from "src/domain/courses/entities/courses.entity";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn
  } from "typeorm";
  
  @Entity('students')
  export class StudentsEntity {
  
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: Date;

    @Column()
    series: number;

    @Column()
    email: string;

    @Column()
    cel: number;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

}
