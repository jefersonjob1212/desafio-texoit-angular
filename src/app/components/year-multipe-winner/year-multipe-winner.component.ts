import { Component, OnInit } from '@angular/core';
import { IColumnHeaderOptions } from 'app/interfaces/i-column-header-options';
import { ArrayResponse } from 'app/models/array-response';
import { Year } from 'app/models/year';
import { MoviesService } from 'app/services/movies.service';
import { AbstractListTableComponent } from 'app/shared/components/abstract-list-table/abstract-list-table.component';
import { TableComponent } from 'app/shared/components/table/table.component';

@Component({
  selector: 'app-year-multipe-winner',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './year-multipe-winner.component.html',
  styleUrl: './year-multipe-winner.component.scss',
})
export class YearMultipeWinnerComponent
  extends AbstractListTableComponent<Year>
  implements OnInit
{
  constructor(protected services: MoviesService) {
    super(services);
  }

  ngOnInit(): void {
    this.columnsHeader = [
      { columnName: 'year', columnLabel: 'Year' },
      { columnName: 'winnerCount', columnLabel: 'Win Count' },
    ];
    this.movieService.getYearsWithMultipleWinners().subscribe((resp: any) => {
      this.dados = resp.years;
    });
  }
}
