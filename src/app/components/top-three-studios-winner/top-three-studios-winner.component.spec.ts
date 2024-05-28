import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeStudiosWinnerComponent } from './top-three-studios-winner.component';
import { MoviesService } from 'app/services/movies.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Studio } from 'app/models/studio';
import { By } from '@angular/platform-browser';

describe('TopThreeStudiosWinnerComponent', () => {
  let component: TopThreeStudiosWinnerComponent;
  let fixture: ComponentFixture<TopThreeStudiosWinnerComponent>;
  let movieService: MoviesService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopThreeStudiosWinnerComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TopThreeStudiosWinnerComponent);
    movieService = TestBed.inject(MoviesService);
    httpController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test find top 3 studios', () => {
    const response: Studio[] = [
      {
        name: 'Columbia Pictures',
        winCount: 7,
      },
      {
        name: 'Paramount Pictures',
        winCount: 6,
      },
      {
        name: 'Warner Bros.',
        winCount: 5,
      },
    ];

    movieService.getStudiosWithWinCount().subscribe((resp: any) => {
      const sliced = resp.slice(0, 3);
      expect(sliced.length).toEqual(3);
      expect(sliced).toEqual(response);
    });

    const req = httpController.match({
      method: 'GET',
      url: 'https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count',
    });

    req[0].flush(response);
    fixture.detectChanges();
    const table = fixture.debugElement.query(By.css('app-table'));
    const row = table.queryAll(By.css('tr'));
    expect(row).toBeTruthy();
  });
});
