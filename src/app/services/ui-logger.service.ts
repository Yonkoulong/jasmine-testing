import { Injectable } from '@angular/core';
import { Logger } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UiLoggerService implements Logger {

  constructor() { }

  log(message: string): void {
    alert(message);
  }
}
