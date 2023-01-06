import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../services/quiz.service";
import {CategoryDto} from "../../dto/CategoryDto";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  name:string|undefined;
  description:string|undefined;
  categoryList:CategoryDto[]=[];

  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  save(){
    let dto:CategoryDto=new CategoryDto(undefined,this.name,this.description,1);
    console.log(dto)
    this.name=undefined;
    this.description=undefined;
    this.quizService.addCategory(dto).then(r=>{
      console.log(r)
      this.getCategories()
    })
      .catch(error=>{
        console.log(error)
      })
  }


  edit(){

  }

  toCategory():CategoryDto{
    return new CategoryDto(undefined,this.name,this.description,1);
  }


  getCategories():void{
    this.quizService.getAllCategory()
      .then(r=>{
        console.log("AAAAAAAAAa")
      this.categoryList=r
      })
      .catch(error=>{
        console.log(error)}
      )
  }



}
