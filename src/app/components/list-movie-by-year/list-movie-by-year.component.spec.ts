import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ListMovieByYearComponent } from './list-movie-by-year.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from 'app/services/movies.service';
import { By } from '@angular/platform-browser';
import { Movie } from 'app/models/movie';

describe('ListMovieByYearComponent', () => {
  let component: ListMovieByYearComponent;
  let fixture: ComponentFixture<ListMovieByYearComponent>;
  let movieService: MoviesService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMovieByYearComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListMovieByYearComponent);
    movieService = TestBed.inject(MoviesService);
    httpController = TestBed.inject(HttpTestingController)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Ao inserir um dado no campo filtro, ao pressionar enter, realizar a busca e atualiza a lista', fakeAsync(() => {
    const year = 1986;
    const response: Movie[] = [
      new Movie(36, 1986, 'Howard the Duck', ['Universal Studios'], ['Gloria Katz'], true),
      new Movie(37, 1986, 'Under the Cherry Moon', ['Warner Bros.'], ['Bob Cavallo', 'Joe Ruffalo', 'Steve Fargnoli'], true)
    ];
    movieService.getWinnerByYear(year).subscribe((resp) => {
      expect(resp).toEqual(response);
    });
    
    const input = fixture.nativeElement.querySelector('input');
    const event = new Event('input');

    input.value = year;
    input.dispatchEvent(event);

    const req = httpController.match({
      method: 'GET',
      url: `https://tools.texoit.com/backend-java/api/movies?winner=true&year=${year}`
    });

    req[0].flush(response);

    fixture.detectChanges();

    const table = fixture.debugElement.query(By.css('app-table'));
    const row = table.query(By.css('tr'));
    expect(component.year).toEqual(year);
    expect(row).toBeTruthy();
  }));
});
