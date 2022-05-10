import { Injectable } from '@angular/core';
import {CategoryDto} from "../dto/CategoryDto";
import axios from "axios";
import {Constants} from "../constants/Constants";
import {configHeader} from "../configHeader";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }


  //Category
  async getAllCategory():Promise<CategoryDto[]>{
    let result:CategoryDto[]=[];
    await axios.get(Constants.BASE_URL_QUIZ_CATEGORY+"/all",configHeader)
      .then(r=>{
        console.log(r)
        result=r.data;
      })
      .catch(error=>{
        console.log(error)})
    return result;
  }

  async getCategory(id:number):Promise<void>{

  }

  async addCategory(categoryDto:CategoryDto):Promise<void>{
    console.log(categoryDto)
    await axios.post(Constants.BASE_URL_QUIZ_CATEGORY+"/add",categoryDto,configHeader)
      .then(response=>{
        console.log(response)
      })
      .catch(error=>{
        console.log(error)
      })
  }

  async editCategory(categoryDto:CategoryDto){
    console.log(categoryDto)

    await axios.put(Constants.BASE_URL_QUIZ_CATEGORY+"/edit",categoryDto,configHeader)
      .then(res=>{
        console.log(res)
      })
      .catch(error=>{
        console.log(error)
      })
  }
}
