import { Component, OnInit } from '@angular/core';
import { IColumnHeaderOptions } from 'app/interfaces/i-column-header-options';
import { MaxMinWinIntervalForProducers } from 'app/models/max-min-producers';
import { ProducerInterval } from 'app/models/producer-interval';
import { MoviesService } from 'app/services/movies.service';
import { TableComponent } from 'app/shared/components/table/table.component';

@Component({
  selector: 'app-interval-producers',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './interval-producers.component.html',
  styleUrl: './interval-producers.component.scss',
})
export class IntervalProducersComponent implements OnInit {
  columnsHeader: IColumnHeaderOptions[] = [
    { columnName: 'producer', columnLabel: 'Producer' },
    { columnName: 'interval', columnLabel: 'Interval' },
    { columnName: 'previousWin', columnLabel: 'Previous Year' },
    { columnName: 'followingWin', columnLabel: 'Following Year' },
  ];

  minIntervalData: ProducerInterval[] = [];
  maxIntervalData: ProducerInterval[] = [];

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service
      .getMaxMinWinIntervalForProducers()
      .subscribe((resp: MaxMinWinIntervalForProducers) => {
        this.minIntervalData = resp.min;
        this.maxIntervalData = resp.max;
      });
  }
}
