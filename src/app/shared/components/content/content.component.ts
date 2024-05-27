import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MoviesService } from 'app/services/movies.service';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LoaderComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {}
