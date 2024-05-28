import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesPaginatedComponent } from './list-movies-paginated.component';
import { MoviesService } from 'app/services/movies.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { PageableResponse } from 'app/models/pageable-response';
import { Movie } from 'app/models/movie';

describe('ListMoviesPaginatedComponent', () => {
  let component: ListMoviesPaginatedComponent;
  let fixture: ComponentFixture<ListMoviesPaginatedComponent>;
  let movieService: MoviesService;
  let httpController: HttpTestingController;
  const eventSelect = new Event('change');
  const eventInput = new Event('keyup');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMoviesPaginatedComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMoviesPaginatedComponent);
    movieService = TestBed.inject(MoviesService);
    httpController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created columns', () => {
    const columns = fixture.debugElement.queryAll(By.css('th'));
    expect(columns.length).toEqual(4);
  });

  it('should be loaded data', () => {
    component.filter();
    fixture.detectChanges();
    expect(component.actualPage).toEqual(0);
    expect(component.pageSize).toEqual(10);
    expect(component.showPagination).toBeTrue();
  });

  it('should be loaded data after keyup', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 2018;
    input.dispatchEvent(eventInput);
    
    fixture.detectChanges();
    expect(component.actualPage).toEqual(0);
    expect(component.pageSize).toEqual(10);
    expect(component.showPagination).toBeTrue();
  });

  it('should be loaded data after select change', () => {
    const select = fixture.debugElement.query(By.css('select')).nativeElement;
    select.value = true;
    select.dispatchEvent(eventSelect);
    
    fixture.detectChanges();
    expect(component.actualPage).toEqual(0);
    expect(component.pageSize).toEqual(10);
    expect(component.showPagination).toBeTrue();
  });
});
