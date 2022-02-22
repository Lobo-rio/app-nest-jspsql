import { CoursesEntity } from "src/domain/courses/entities/courses.entity";
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn
} from "typeorm";
  
  import { MattersEntity } from "../../matters/entities/Matters.entity";
  
  @Entity('teachers')
  export class TeachersEntity {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    email: string;
  
    @Column()
    cel: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @CreateDateColumn()
    updatedAt: Date;
  
    @JoinTable()
    @ManyToMany(() => MattersEntity, (matter) => matter.teachers, { cascade: true })
    matters: MattersEntity[];

    @ManyToMany(()=> CoursesEntity, (course)=> course.theachers)
    teachers: CoursesEntity[];
  
}
  
