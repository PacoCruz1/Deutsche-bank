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
  public placeholder: string;
  public result: string;
  
  
  constructor(public dataServise: DataService) { }

  ngOnInit(): void 
  {
    this.title = 'Divide';
    this.placeholder = "Enter a number";
    this.dataServise.showTime = this.dataServise.time;

  }


}


