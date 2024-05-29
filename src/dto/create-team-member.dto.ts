import { IsString, IsEmail, IsIn } from 'class-validator';

export class CreateTeamMemberDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    phone: string;

    @IsEmail()
    email: string;

    @IsIn(['admin', 'user'], { message: 'Role must be either "admin" or "user"' })
    role: string;
}
