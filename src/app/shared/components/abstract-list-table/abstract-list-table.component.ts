import { Injectable } from '@angular/core';
import { IColumnHeaderOptions } from 'app/interfaces/i-column-header-options';
import { MoviesService } from 'app/services/movies.service';

@Injectable()
export abstract class AbstractListTableComponent<T> {

  protected columnsHeader: IColumnHeaderOptions[] = [];
  
  protected dados: T[] = [];

  constructor(protected movieService: MoviesService) {}

}
