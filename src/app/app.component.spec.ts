import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => 
{
  let component: AppComponent;
  let expected = "";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],

      
    }).compileComponents();

    component = new AppComponent;
  });

  /*it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Text placeholder input 'Enter a number'`, () => {
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
     expect(app.placeholder).toEqual('Enter a number');
  });*/

  it('should render Title', (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    component.ngOnInit();
    expect(compiled.querySelector('h1').textContent).toContain('Deutsche Bank');
  }));

  xit("Text title app 'Deutsche Bank'", () =>
  {
    let myVar: string = component.title;

    component.ngOnInit();

    expect(myVar).toEqual('Deutsche Bank');
  });

  it("Text title Placeholder 'Enter a number'", () =>
  {
    let myVar: string = component.placeholder;

    expect(myVar).toEqual('Enter a number');
  });

  xit("Function Div", (() =>{
    let a: number = 50;
    let b: number = 10;
    let resultt: number = a / b;

    expect(component.Div()).toBe(resultt);
  }));
  
  it("Is called method 'OnKey'", () =>
  {    
      const keyBoard = new KeyboardEvent('key');
      let spy1 = spyOn(component, `OnKey`);

      component.OnKey(keyBoard);

      expect(spy1).toHaveBeenCalled();
  });

  it("Is called method 'Div'", () =>
  {    
      let spy1 = spyOn(component, `Div`);

      component.Div();

      expect(spy1).toHaveBeenCalled();
  });

  it("Is called method 'Validation'", () =>
  {    
      const keyBoard = new KeyboardEvent('key');
      let spy1 = spyOn(component, `Validation`);

      component.Validation(keyBoard);

      expect(spy1).toHaveBeenCalled();
  });

  xit("Exists element HTML 'input'", (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    
    expect(compiled.querySelector('.box1').textContent).toEqual('Deutsche Bank');
  }));

});
