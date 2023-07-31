import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsEmail()
  public email: string;

  @MinLength(6)
  public password: string;

  @IsString()
  public name: string;
}
