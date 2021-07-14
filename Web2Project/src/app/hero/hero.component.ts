import { Component, OnInit } from '@angular/core';
import { IHero } from '../model/hero';
import { HeroService } from '../services/Hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public heroes: IHero[];
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes$().subscribe((res: IHero[]) => {
      this.heroes = res;
    });
  }

  addAge(heroId: number) {
    this.heroService.updateHeroAge(heroId, this.heroes[heroId].age + 1);
  }

  addHero() {
    this.heroService.addHeroes({name: 'Afrodita', age: 23});
  }

}
