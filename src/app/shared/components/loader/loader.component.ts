import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { LoaderModule } from './loader.module';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, LoaderModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  public loading: Subject<boolean> = this.loaderService.isLoading();

  constructor(private loaderService: LoaderService) {}

}
