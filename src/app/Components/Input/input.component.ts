import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, Inject } from '@angular/core';
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
  private ids: any;
  private elementId: any;  

  public secons: number; 
  public isError: boolean;
  public message: string;
  public position: string;
  public isFocus: string;

  @Input() type: string;
  @Input() class: string;
  @Input() id: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() isAuto: boolean;
  @Input() index: string;
  @Input() value: DataService;
  @Input() focus: string;
  @Input() readOnly: string;


  @Output() ShowResult = new EventEmitter<String>();

  @ViewChild('myDOMElement', {static: true}) MyDOMElement:ElementRef;

  constructor(public dataService: DataService, @Inject(DOCUMENT) document) { }

  ngOnInit(): void 
  {
    this.isFocused = false;   
    this.secons = this.dataService.time;
  }

  public MouseEnter(e)
  {
    this.dataService.isFocus = false;
    this.secons = this.dataService.time;
    this.dataService.showTime = this.dataService.time;
    this.IsDivide0(e);
    this.isError = false;
    this.IsFocused(e);
    if(e.key !== "e" && e.target.id === "box2")
    {
      this.Countdown();
    }

  }

  public OnKey(e)
  {
    if(e.target.id === "time")
    {
      this.dataService.time = e.target.value;
    }



    this.dataService.isFocus = false;
    this.secons = this.dataService.time;
    this.dataService.showTime = this.dataService.time;
    this.IsDivide0(e);
    this.isError = false;
    this.IsFocused(e);
    if(e.key !== "e" && e.target.id === "box2")
    {
      this.Countdown();
    }
  }

  public Validation(e)
  {    

    if(e.target.value !== "")
    {
      if(e.target.id === "box2" && e.target.value == 0)
      {
        this.message = error.div0;
        this.isError = true;
      }
      else if(this.isFocused)
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
        this.isError = true;
      }
      
    }
    
  }

  public Focus(e)
  {
    document.getElementById('res').setAttribute('readonly', 'true');
    
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
  private IsDivide0(e)
  {
    if(this.isError && e.target.id === "box2")
    {
      e.target.value = "";
      e.target.innerHTML = "";
    }
  }

  private Countdown():void
  {    
    clearInterval(this.ids);    
    this.ids = setInterval(() => this.Tick(), 1000);
  }

  private Tick():void
  {
    if(--this.secons <= 0) 
    {
      clearInterval(this.ids);
      this.MyDOMElement.nativeElement.blur(true); 
      document.getElementById('res').focus();
      this.Div();       
    }
    this.dataService.showTime = this.secons;
  }
  
  public Div():void
  {
    if(this.dataService.field[1].valueId == "0")
    {
      this.message = error.div0;
      this.isError = true;
    }
    else
    {
      this.isError = false;
      let result =  parseFloat(this.dataService.field[0].valueId) / parseFloat(this.dataService.field[1].valueId)
     
      this.dataService.result = result.toString();
      this.dataService.isFocus = true;
      
    }
  }

  ngOnDestroy()
  {
    clearInterval(this.ids);
  }
}



