import { Injectable } from '@angular/core';
import { Logger } from '../types';

@Injectable()
export class ConsoleLoggerService implements Logger {

  constructor() { }

  log(message: string): void {
    console.log(message);
  }
}
