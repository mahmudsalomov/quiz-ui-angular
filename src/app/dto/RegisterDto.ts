export class RegisterDto {
  fio: string | undefined;
  email: string | undefined;
  username: string | undefined;
  password: string | undefined;


  constructor(fio: string | undefined, email: string | undefined, username: string | undefined, password: string | undefined) {
    this.fio = fio;
    this.email = email;
    this.username = username;
    this.password = password;
  }
}
