import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalProducersComponent } from './interval-producers.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { IColumnHeaderOptions } from 'app/interfaces/i-column-header-options';
import { MoviesService } from 'app/services/movies.service';
import { MaxMinWinIntervalForProducers } from 'app/models/max-min-producers';

describe('IntervalProducersComponent', () => {
  let component: IntervalProducersComponent;
  let fixture: ComponentFixture<IntervalProducersComponent>;
  let service: MoviesService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervalProducersComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(IntervalProducersComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MoviesService);
    httpController = TestBed.inject(HttpTestingController)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should existing tables', () => {
    fixture.detectChanges();
    const tables = fixture.debugElement.queryAll(By.css('app-table'));
    expect(tables.length).toEqual(2);
  });

  it('should count columns to generate', () => {
    fixture.detectChanges();
    let countColumns: number = 0;
    const columnsHeader: IColumnHeaderOptions[] = [
      { columnName: 'producer', columnLabel: 'Producer' },
      { columnName: 'interval', columnLabel: 'Interval' },
      { columnName: 'previousWin', columnLabel: 'Previous Year' },
      { columnName: 'followingWin', columnLabel: 'Following Year' },
    ];

    component.columnsHeader = columnsHeader;
    const tables = fixture.debugElement.queryAll(By.css('app-table'));
    const columns = tables.map((table) => table.queryAll(By.css('th')));
    columns.forEach((el) => el.forEach((el2) => countColumns++));

    expect(tables.length).toEqual(2);
    expect(countColumns).toEqual(8);
  });

  it('should alter data table', () => {
    const response: MaxMinWinIntervalForProducers = {
      min: [
        {
          producer: 'Joel Silver',
          interval: 1,
          previousWin: 1990,
          followingWin: 1991,
        },
      ],
      max: [
        {
          producer: 'Matthew Vaughn',
          interval: 13,
          previousWin: 2002,
          followingWin: 2015,
        },
      ],
    };

    service.getMaxMinWinIntervalForProducers().subscribe(resp => {
      expect(resp.max).toEqual(response.max);
      expect(resp.min).toEqual(response.min);
    });

    const req = httpController.match({
      method: 'GET',
      url: 'https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers'
    });

    req[0].flush(response);
    fixture.detectChanges();
    expect(component.minIntervalData.length).toEqual(1);
    expect(component.maxIntervalData.length).toEqual(1);
  });
});
