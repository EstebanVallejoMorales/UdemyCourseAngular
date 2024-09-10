import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counter</h1>
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    <hr>
  `
})
export class CounterComponent  {
  //constructor() { }
  public counter: number = 10;

  increaseBy(increaseValue: number):void {
    this.counter += increaseValue;
  }

  reset():void {
    this.counter = 10;
  }
}
