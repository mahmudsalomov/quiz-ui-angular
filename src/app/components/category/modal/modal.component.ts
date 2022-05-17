import {Component, Input, OnInit} from '@angular/core';
import {CategoryDto} from "../../../dto/CategoryDto";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  name:string|undefined;
  description:string|undefined;
  @Input() category!:CategoryDto;
  @Input() public getCategories: (() => void)|undefined;
  @Input() save: void | undefined
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
  }


  toCategory():CategoryDto{
    if (this.category!){
      return new CategoryDto(undefined,this.name,this.description,1);
    }
    return this.category;
  }


  saveC():any{

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
    // console.log("CCCCCCCCCCCCCCCcccc")
    // // @ts-ignore
    // console.log(this.getCategories())
    // // this.save(this.category)
  }


}
