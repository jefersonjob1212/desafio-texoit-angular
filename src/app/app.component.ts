import { Component } from '@angular/core';
import { ContentComponent } from './shared/components/content/content.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste';
}
