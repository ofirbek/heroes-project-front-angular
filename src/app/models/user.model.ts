import { Hero } from './hero.model';

export interface User {
  id: string;
  userName: string;
  email: string;
  password: string;
  myHeroes: Hero[];
}
