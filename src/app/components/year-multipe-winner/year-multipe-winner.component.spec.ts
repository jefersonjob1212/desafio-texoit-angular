import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMultipeWinnerComponent } from './year-multipe-winner.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from 'app/services/movies.service';
import { Year } from 'app/models/year';
import { By } from '@angular/platform-browser';

describe('YearMultipeWinnerComponent', () => {
  let component: YearMultipeWinnerComponent;
  let fixture: ComponentFixture<YearMultipeWinnerComponent>;
  let movieService: MoviesService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearMultipeWinnerComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearMultipeWinnerComponent);
    movieService = TestBed.inject(MoviesService);
    httpController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test find years when more winner by year', () => {
    const response: Year[] = [
      {
        year: 1986,
        winnerCount: 2,
      },
      {
        year: 1990,
        winnerCount: 2,
      },
      {
        year: 2015,
        winnerCount: 2,
      },
    ];

    movieService.getYearsWithMultipleWinners().subscribe((resp: any) => {
      const sliced = resp;
      expect(sliced).toEqual(response);
    });

    const req = httpController.match({
      method: 'GET',
      url: 'https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners',
    });

    req[0].flush(response);
    fixture.detectChanges();
    const table = fixture.debugElement.query(By.css('app-table'));
    const row = table.queryAll(By.css('tr'));
    expect(row).toBeTruthy();
  });
});
