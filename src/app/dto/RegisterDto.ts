export class RegisterDto {
  fio: string | undefined;
  email: string | undefined;
  organizationName: string | undefined;
  username: string | undefined;
  password: string | undefined;


  constructor(fio: string | undefined, email: string | undefined, organizationName: string | undefined, username: string | undefined, password: string | undefined) {
    this.fio = fio;
    this.email = email;
    this.organizationName=organizationName
    this.username = username;
    this.password = password;
  }
}
