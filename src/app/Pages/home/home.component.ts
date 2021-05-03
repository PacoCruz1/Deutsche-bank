import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./CSS/home.component.css']
})
export class HomeComponent implements OnInit 
{

  public title: string;
  public result: string;
  public input1: number;
  public input2: number;
  public placeholder: string;
  
  constructor(private dataServese: DataService) { }

  ngOnInit(): void 
  {
    this.title = 'Divide';
    this.placeholder = "Enter a number";

  }

  // ChangeName()
  // {
  //   this.name = 'Ahora el que cambia el nombre es el Padre';
  //   this.dataServese.name = this.name;
  // }

  // ChangeSonName(e: string)
  // {
  //   this.name = e;
  //   this.dataServese.name = this.name;
  // }

}


