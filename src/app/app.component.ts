import { Component } from '@angular/core';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ContentComponent } from './shared/components/content/content.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ContentComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste';
}
