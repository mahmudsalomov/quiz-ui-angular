import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Constants} from "../../constants/constants";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  logOut():void {
    localStorage.removeItem(Constants.TOKEN)
    window.location.href="/login"
  }
}
