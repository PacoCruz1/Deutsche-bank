import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { InputComponent } from './Input/input.component';



@NgModule({
  declarations: [
    NavbarComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    InputComponent
  ]

})
export class ComponentsModule { }


