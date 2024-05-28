import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create all components', () => {
    fixture.detectChanges();
    const yearMultipleWinner = fixture.debugElement.query(By.css('app-year-multipe-winner'));
    const topThreeStudiosWinner = fixture.debugElement.query(By.css('app-top-three-studios-winner'));
    const intervalProducers = fixture.debugElement.query(By.css('app-interval-producers'));
    const listMovieByYear = fixture.debugElement.query(By.css('app-list-movie-by-year'));
    expect(yearMultipleWinner).toBeTruthy();
    expect(topThreeStudiosWinner).toBeTruthy();
    expect(intervalProducers).toBeTruthy();
    expect(listMovieByYear).toBeTruthy();
  });
});
