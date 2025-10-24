import { Transform } from 'class-transformer';
import { IsString, IsEmail, IsInt, IsBoolean, IsDateString, IsOptional } from 'class-validator';

export class CreateProfileDto {
    @IsString()
    name: string;

    @Transform(({ value }) => value.trim())
    @IsEmail()
    email: string;

    @IsInt()
    age: number;

    @IsDateString()
    dob: string;

    @IsOptional()
    @IsBoolean()
    available?: boolean;

    @IsOptional()
    @IsString()
    profile_url?: string;

    @IsString()
    address: string;
}