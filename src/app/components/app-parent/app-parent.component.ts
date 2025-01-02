import { Component, Inject, InjectionToken } from '@angular/core';
import { MyService} from '../../services/my-service.service';
import { AppChildComponent } from '../app-child/app-child.component';

const MY_HANDLERS = new InjectionToken<string[]>('MY_HANDLERS1');

@Component({
  selector: 'app-parent',
  imports: [AppChildComponent],
  templateUrl: './app-parent.component.html',
  styleUrl: './app-parent.component.scss',
  providers: [
    MyService,
    { provide: MY_HANDLERS, useValue: 'my-handlers 1', multi: true },
    { provide: MY_HANDLERS, useValue: 'my-handlers 2', multi: true }
  ]
})
export class AppParentComponent {
  constructor(@Inject(MY_HANDLERS) public handler: string[]) { 
    console.log(handler);
  }
}
