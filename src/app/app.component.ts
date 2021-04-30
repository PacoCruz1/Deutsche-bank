import { Component, OnInit, OnDestroy} from '@angular/core';

enum error
{
  required = "This field is empty",
  div0 = "Do not divide by 0",
  time = "Time delay"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./CSS/app.component.css']
})



export class AppComponent  implements OnInit, OnDestroy
{  
  public title: string;
  public placeholder: string = 'Enter a number';
  public text1: string;
  public text2: string;
  public result: string;
  public message1: error;
  public message2: error;
  public message3: error;

  public time: number;
  public secons: number;
  public input1: number;
  public input2: number; 

  public isBlur: boolean;
  public isFocus: boolean; 
  public isError1:boolean;
  public isError2:boolean;

  private id: any;

  constructor(){};

  ngOnInit()
  {
      this.title = 'Deutsche Bank';
      this.result = "";
      this.isBlur= false;
      this.isFocus = false; 
      this.isError1 = false;     
      this.isError2 = false; 
      this.secons = 5;
      this.message3 = error.time;
  }


  private Tick():void
  {
    if(--this.secons <= 0) 
    {
      clearInterval(this.id);
      this.Div(); 
    }
  }
  
  public MouseEnter(e)
  {
    this.isFocus = false;
    this.isBlur = false;
  }

  public OnKey(e):void
  {        
    this.isFocus = false;
    this.isBlur = false;

    if(e.key !== "e" && e.target.id === "box2")
    {
      this.Countdown();
    }
  }

  public Validation(e):void
  {
    if(e.target.value === "")
    {
      this.message1 = error.required;
    }
    this.isError1 = false;
  }

  private Countdown():void
  {
    clearInterval(this.id);    
    this.id = setInterval(() => this.Tick(), 1000);
  }

  public Div():string
  {
    if(this.input2 == 0)
    {
      this.message2 = error.div0;
    }
    else
    {
      this.isError2 = false;
      let res: number = this.input1 / this.input2
      this.result = res.toString();
      
      this.isBlur = true;
      this.isFocus = true;

      return this.result;
    }

    
  }

  ngOnDestroy()
  {
    clearInterval(this.id);
  }
}
