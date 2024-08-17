import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TestHostDirective } from './test-host.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestHostDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'try-angular-binding';
}
