import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {SignIn} from "../../../dto/SignIn";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../auth.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login():void{
    console.log(this.username)
    console.log(this.password)
    let signIn = new SignIn(this.username,this.password);
    this.authService.login(signIn)
  }


}
