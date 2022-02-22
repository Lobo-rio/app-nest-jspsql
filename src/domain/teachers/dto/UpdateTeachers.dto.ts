import { PartialType } from "@nestjs/mapped-types";
import { CreateTeachersDto } from "./createteachers.dto";

export class UpdateTeachersDto extends PartialType(CreateTeachersDto) {}
