import {Component, Input, OnInit} from '@angular/core';
import {CategoryDto} from "../../../dto/CategoryDto";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  name:string|undefined;
  description:string|undefined;
  @Input() category!:CategoryDto;
  @Input() save:any
  constructor() { }

  ngOnInit(): void {
  }


  toCategory():CategoryDto{
    if (this.category!){
      return new CategoryDto(undefined,this.name,this.description,1);
    }
    return this.category;
  }


  saveC():any{
    this.save(this.category)
  }


}
