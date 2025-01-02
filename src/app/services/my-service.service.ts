import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  value = Math.random();
  constructor() { }
  
}
