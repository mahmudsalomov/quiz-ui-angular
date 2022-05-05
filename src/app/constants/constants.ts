import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Constants {
  static BASE_URL: string = 'http://localhost:8085/api';
  static BASE_URL_ORGANIZATION: string = Constants.BASE_URL + '/organization';
  static BASE_URL_ORGANIZATION_USER: string = Constants.BASE_URL_ORGANIZATION + '/user';

  static BASE_URL_ORGANIZATION_USER_REGISTER: string = Constants.BASE_URL_ORGANIZATION_USER + '/register';


  static BASE_URL_QUIZ: string = Constants.BASE_URL + '/quiz';
  static BASE_URL_PARTICIPANT: string = Constants.BASE_URL + '/participant';
  static TOKEN: string = "TOKEN";

  constructor() { }
}
