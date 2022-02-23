import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinTable,
    ManyToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";

import { TeachersEntity } from "../../../domain/teachers/entities/Teachers.entity";
import { StudentsEntity } from "../../../domain/students/entities/students.entity";

@Entity('courses')
export class CoursesEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    period: string;

    @JoinTable()
    @ManyToMany(() => TeachersEntity)
    teachers: TeachersEntity[];

    @JoinTable()
    @ManyToMany(()=> StudentsEntity)
    students: StudentsEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

}
