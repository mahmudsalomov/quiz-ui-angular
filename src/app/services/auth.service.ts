import { Injectable } from '@angular/core';
import {RegisterDto} from "../dto/RegisterDto";
import {SignIn} from "../dto/SignIn";
import axios from "axios";
import {Constants} from "../constants/Constants";
import {configHeader} from "../configHeader";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

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



  async login(login:SignIn):Promise<void>{
    console.log(login)
    await axios.post(Constants.BASE_URL_ORGANIZATION_LOGIN,login,configHeader)
      .then(async response => {
        localStorage.setItem(Constants.TOKEN, response.data.token)
        // await this.router.navigate(["/"], {queryParams: {returnUrl: "/dashboard"}})
        window.location.href="/dashboard"
        // await this.router.navigateByUrl("/dashboard")
      })
      .catch(error=>{
        console.log(error)
      })
  }

  async check():Promise<boolean>{
    let result:boolean=false;
    console.log(configHeader)
    await axios.get(Constants.BASE_URL_ORGANIZATION_AUTH_CHECK,configHeader)
      .then(response=>{
        if (response.data) result=true;
      })
      .catch(error=>{
        console.log(error)}
      )
    return result;
  }
}
