import { Component } from '@angular/core';
import { IntervalProducersComponent } from 'app/components/interval-producers/interval-producers.component';
import { ListMovieByYearComponent } from 'app/components/list-movie-by-year/list-movie-by-year.component';
import { TopThreeStudiosWinnerComponent } from 'app/components/top-three-studios-winner/top-three-studios-winner.component';
import { YearMultipeWinnerComponent } from 'app/components/year-multipe-winner/year-multipe-winner.component';
import { FilterTypeEnum } from 'app/enums/filter-type.enum';
import { IColumnHeaderOptions } from 'app/interfaces/i-column-header-options';
import { TableComponent } from 'app/shared/components/table/table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    YearMultipeWinnerComponent,
    TopThreeStudiosWinnerComponent,
    IntervalProducersComponent,
    ListMovieByYearComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // columnsHeader: IColumnHeaderOptions[] = [
  //   { columnName: 'id', columnLabel: 'ID' },
  //   {
  //     columnName: 'year',
  //     columnLabel: 'Year',
  //     filterOptions: {
  //       type: FilterTypeEnum.INPUT_NUMBER,
  //     },
  //   },
  //   { columnName: 'title', columnLabel: 'Title' },
  //   {
  //     columnName: 'winner',
  //     columnLabel: 'Winner?',
  //     filterOptions: {
  //       type: FilterTypeEnum.SELECT,
  //       options: [
  //         { id: null, label: 'Yes/No' },
  //         { id: true, label: 'Yes' },
  //         { id: false, label: 'No' },
  //       ],
  //     },
  //   },
  // ];
  constructor() {}

  // testCHange(event: any) {
  //   console.log(event.target.value)
  // }
}
