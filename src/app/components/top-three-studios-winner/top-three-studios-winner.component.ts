import { Component, OnInit } from '@angular/core';
import { IColumnHeaderOptions } from 'app/interfaces/i-column-header-options';
import { Studio } from 'app/models/studio';
import { MoviesService } from 'app/services/movies.service';
import { AbstractListTableComponent } from 'app/shared/components/abstract-list-table/abstract-list-table.component';
import { TableComponent } from 'app/shared/components/table/table.component';

@Component({
  selector: 'app-top-three-studios-winner',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './top-three-studios-winner.component.html',
  styleUrl: './top-three-studios-winner.component.scss',
})
export class TopThreeStudiosWinnerComponent
  extends AbstractListTableComponent<Studio>
  implements OnInit
{
  constructor(protected services: MoviesService) {
    super(services);
  }

  ngOnInit(): void {
    this.columnsHeader = [
      { columnName: 'name', columnLabel: 'Name' },
      { columnName: 'winCount', columnLabel: 'Win Count' },
    ];
    this.movieService.getStudiosWithWinCount().subscribe((resp: any) => {
      this.dados = resp.studios.slice(0, 3);
    });
  }
}
