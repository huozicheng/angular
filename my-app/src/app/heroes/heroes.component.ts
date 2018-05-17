import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroDetailComponent} from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heros: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeros(): void {
    this.heroService.getHeros().subscribe(heros=>this.heros = heros);
  }

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeros();
  }
}
