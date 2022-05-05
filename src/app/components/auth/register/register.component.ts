import { Component, OnInit } from '@angular/core';
import {RegisterDto} from "../../../dto/RegisterDto";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../auth.component.css']
})
export class RegisterComponent implements OnInit {
  fio: string | undefined;
  email: string | undefined;
  username: string | undefined;
  password: string | undefined;
  retype_password: string | undefined;

  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
  }


  test():void{
    this.route.navigate(['/'])
  }

  register():void{
    let register = new RegisterDto(this.fio, this.email, this.username, this.password);
    console.log(register)
    this.authService.register(register).then(r=>{
      console.log("AAAAAA")
      console.log(r)
    });
  }

}
