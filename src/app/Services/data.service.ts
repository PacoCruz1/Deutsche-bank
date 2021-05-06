import { Injectable, OnInit } from '@angular/core';
import { InputClass } from '../Model/InputClass'

@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit
{

  public field: Array<InputClass> = new Array();
  public result: string;
  public isFocus: boolean;
  public time: number = 5;
  public showTime: number;

  constructor() { }

  ngOnInit()
  {
    this.time = 5;
  }

}


