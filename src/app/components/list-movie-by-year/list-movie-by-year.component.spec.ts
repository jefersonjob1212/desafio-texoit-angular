import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ListMovieByYearComponent } from './list-movie-by-year.component';

describe('ListMovieByYearComponent', () => {
  let component: ListMovieByYearComponent;
  let fixture: ComponentFixture<ListMovieByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMovieByYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMovieByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Ao inserir um dado no campo filtro, ao pressionar enter, realizar a busca', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');
    const event = new Event('input');

    input.value = 2018;
    input.dispatchEvent(event);

    fixture.detectChanges();

    expect(component.year).toEqual(2018);
  }))
});
