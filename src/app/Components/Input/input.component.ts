import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit 
{
  public isError: boolean;
  public message: string;
  public position: string;

  @Input() type: string;
  @Input() class: string;
  @Input() id: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() isAuto: boolean;
  @Input() index: string;
  @Input() value: string;

  @Output() changeNameSon = new EventEmitter<String>();

  //constructor(private dataService: DataService) { }

  ngOnInit(): void 
  {
    
  }

  MouseEnter(e)
  {
    return;
  }

  OnKey(e)
  {
    return;
  }

  Validation(e)
  {
    return;
  }


  // ChangeName()
  // {
  //   this.nameSon = 'Ahora el que cambia el nombre es el input';
  //   this.changeNameSon.emit(this.nameSon);
  //   //this.dataService.name = this.nameSon;
  // }

}


