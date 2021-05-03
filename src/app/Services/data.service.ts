import { Injectable } from '@angular/core';
import { InputClass } from '../Model/InputClass'

@Injectable({
  providedIn: 'root'
})

export class DataService 
{

  public field: Array<InputClass> = new Array();

  constructor() { }

}


