import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName(): string { //Se comporta como propiedad y por ello es llamado sin paréntesis.
    return this.name.toUpperCase();
  }

  public getHeroDescription():string { //Debe ser llamado con paréntesis.
    return `${this.name} - ${this.age}`
  }

  public changeHero():void {
    this.name = 'Spiderman';
  }

  public changeAge():void {
    this.age = 25;
  }


}
