import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeStudiosWinnerComponent } from './top-three-studios-winner.component';

describe('TopThreeStudiosWinnerComponent', () => {
  let component: TopThreeStudiosWinnerComponent;
  let fixture: ComponentFixture<TopThreeStudiosWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopThreeStudiosWinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopThreeStudiosWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
