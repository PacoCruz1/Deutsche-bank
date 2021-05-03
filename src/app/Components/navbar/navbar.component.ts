import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit 
{

  public title: string;

  constructor(public dataService: DataService) { }

  ngOnInit(): void 
  {
    this.title = "Titulo"
  }

}
