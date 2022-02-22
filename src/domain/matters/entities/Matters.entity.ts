import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { TeachersEntity } from "../../teachers/entities/Teachers.entity";

@Entity('matters')
export class MattersEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(()=> TeachersEntity, (teacher)=> teacher.matters)
  teachers: TeachersEntity[];

}
