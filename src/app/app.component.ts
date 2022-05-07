import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'quiz-ui';
  header:boolean=false;
  constructor(private authService:AuthService,private router: Router) {
  }

  ngOnInit(): void {
    console.log("URL = "+this.router.url)
    this.authService.check()
      .then(i=>{
        console.log("CHECK")
        if (!i) {
          this.header=false
        }else {
          this.header = !(this.router.url == "/login" || this.router.url == "/register");
        }

        console.log(i)}
    )
      .catch(error=>{

      })
  }

  isCheck():boolean{
    return this.header;
  }
}
