import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingModule } from '../components/landing/landing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'judo-site';
}
