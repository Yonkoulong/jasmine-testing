import { Component } from '@angular/core';
import { MyService } from '../../services/my-service.service';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './app-child.component.html',
  styleUrl: './app-child.component.scss'
})
export class AppChildComponent {

  constructor(public myService: MyService) { }
}
