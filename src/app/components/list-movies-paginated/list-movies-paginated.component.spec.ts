import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesPaginatedComponent } from './list-movies-paginated.component';

describe('ListMoviesPaginatedComponent', () => {
  let component: ListMoviesPaginatedComponent;
  let fixture: ComponentFixture<ListMoviesPaginatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMoviesPaginatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMoviesPaginatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
