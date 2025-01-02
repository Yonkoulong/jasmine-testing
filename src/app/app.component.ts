import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppParentComponent } from './components/app-parent/app-parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jasmine-testing';
}
