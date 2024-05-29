import { IsString, IsEmail, IsIn, IsOptional } from 'class-validator';

export class UpdateTeamMemberDto {
    @IsOptional()
    @IsString()
    firstName?: string;

    @IsOptional()
    @IsString()
    lastName?: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsIn(['admin', 'user'], { message: 'Role must be either "admin" or "user"' })
    role?: string;
}
