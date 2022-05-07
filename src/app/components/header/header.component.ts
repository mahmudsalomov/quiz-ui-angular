import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  check:boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.check = !(this.router.url == "/login" || this.router.url == "/register");
  }

  isCheck():boolean{
    return this.check;
  }

}
