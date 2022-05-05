import { Injectable } from '@angular/core';
import {RegisterDto} from "../dto/RegisterDto";
import {SignIn} from "../dto/SignIn";
import axios from "axios";
import {Constants} from "../constants/constants";
import {configHeader} from "../configHeader";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async register(register:RegisterDto): Promise<any>{
    let result;
    console.log(register);
    await axios.post(Constants.BASE_URL_ORGANIZATION_USER_REGISTER,register,configHeader)
      .then(r => {
        result=r;
        console.log(r)
      })
      .catch(error=>{
        result=error
        console.log(error)
      })
    return result;
  }



  login(login:SignIn):void{
    console.log(login)
  }
}