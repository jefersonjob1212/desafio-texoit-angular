import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMultipeWinnerComponent } from './year-multipe-winner.component';

describe('YearMultipeWinnerComponent', () => {
  let component: YearMultipeWinnerComponent;
  let fixture: ComponentFixture<YearMultipeWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearMultipeWinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearMultipeWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
