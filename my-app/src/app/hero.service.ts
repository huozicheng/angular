import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROS } from './mock-heros';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeros(): Observable<Hero[]> {
    return of(HEROS);
  }
}
