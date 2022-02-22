import { IsNotEmpty, IsString } from "class-validator";

export class CreateCoursesDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    readonly period: string;

    @IsNotEmpty()
    @IsString({ each: true })
    readonly teachers: number[];

    @IsNotEmpty()
    @IsString({ each: true })
    readonly students: number[];

}
