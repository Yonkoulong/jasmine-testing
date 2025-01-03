import { Component, computed, effect, Inject, OnInit, signal } from '@angular/core';
import { MyService} from '../../services/my-service.service';
import { AppChildComponent } from '../app-child/app-child.component';
import { LOGGER_TOKEN, MY_HANDLERS } from '../../models';
import { ConsoleLoggerService } from '../../services/console-logger.service';
import { UiLoggerService } from '../../services/ui-logger.service';


@Component({
  selector: 'app-parent',
  imports: [AppChildComponent],
  templateUrl: './app-parent.component.html',
  styleUrl: './app-parent.component.scss',
  providers: [
    MyService,
    { provide: MY_HANDLERS, useValue: 'my-handlers 1', multi: true },
    { provide: MY_HANDLERS, useValue: 'my-handlers 2', multi: true },
    { provide: LOGGER_TOKEN, useClass: ConsoleLoggerService },
  ],
  styles: [
    `
      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      } 
    `
  ]
})
export class AppParentComponent implements OnInit {
  message = signal<string>('Hello from signal');

  descriptionMessage = computed(() => this.message() + ', That is a computed message!');

  constructor(@Inject(MY_HANDLERS) public handler: string[], 
  @Inject(LOGGER_TOKEN) private logger: ConsoleLoggerService,
  @Inject(LOGGER_TOKEN) private uiLogger: UiLoggerService
  ) { 
    console.log(handler);
    this.logger.log('AppParentComponent logger');
    this.uiLogger.log('AppParentComponent uiLogger');

    effect(() => { // effect run when message is updated
      if(this.message().length === 3) {
        console.log('Message is 3 characters');
      }
     })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.message.set('Hel');
     }, 5000);
  }

}
