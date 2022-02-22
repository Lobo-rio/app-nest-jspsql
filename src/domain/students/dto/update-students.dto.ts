import { PartialType } from "@nestjs/mapped-types";
import { CreateStudentsDto } from "./create-students.dto";

export class UpdateStudentsDto extends PartialType(CreateStudentsDto) {}
