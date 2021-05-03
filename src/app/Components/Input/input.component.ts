import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { InputClass } from '../../Model/InputClass';

enum error
{
  required = "This field is empty",
  div0 = "Do not divide by 0",
  time = "Time delay"
}


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit 
{
  private isFocused: boolean;
  private fieldExists: InputClass;


  public isError: boolean;
  public message: string;
  public position: string;
  public value: string;

  @Input() type: string;
  @Input() class: string;
  @Input() id: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() isAuto: boolean;
  @Input() index: string;

  @Output() changeNameSon = new EventEmitter<String>();

  constructor(public dataService: DataService) { }

  ngOnInit(): void 
  {
    this.isFocused = false;
  }

  public MouseEnter(e)
  {
    this.isError = false;
    this.IsFocused(e);
  }

  public OnKey(e)
  {
    this.isError = false;
    this.IsFocused(e);
  }

  public Validation(e)
  {
    if(e.target.value !== "")
    {
      if(this.isFocused)
      {
        this.fieldExists.valueId = e.target.value;
        this.isFocused = false;
      }
      else
      {
        var newInput = new InputClass(e.target.id, e.target.value, true);
        this.dataService.field.push(newInput);    
    }
      }
      
    else
    {
      if(e.target.id === "box1")
      {
        this.message = error.required;
      }
      else if(e.target.id === "box1")
      {
        this.message = error.div0;
      }
      this.isError = true;
    }
    
  }

  private IsFocused(e)
  {
    this.dataService.field.forEach((field) =>
    {
      if(field.id === e.target.id && field.isFinish)
      {
        this.isFocused = true;
        this.fieldExists = field;
      }
    });
  }


  // ChangeName()
  // {
  //   this.nameSon = 'Ahora el que cambia el nombre es el input';
  //   this.changeNameSon.emit(this.nameSon);
  //   //this.dataService.name = this.nameSon;
  // }

}


