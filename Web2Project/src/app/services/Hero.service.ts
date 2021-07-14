import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes$: BehaviorSubject<IHero[]> = new BehaviorSubject<IHero[]>([]);
  
  constructor() {
  }

  addHeroes(hero: IHero) { // To add new hero
    const actualHero = this.heroes$.value;
    actualHero.push(hero);
    this.heroes$.next(actualHero);
  }

  updateHeroAge(heroId: number, age: number) { // To update age of selected hero
    const actualHero = this.heroes$.value;
    actualHero[heroId].age = age;
    this.heroes$.next(actualHero);
  }

  getHeroes$(): BehaviorSubject<IHero[]> { // To get BehaviorSubject and pass it into ReactJS
    return this.heroes$;
  }

}
