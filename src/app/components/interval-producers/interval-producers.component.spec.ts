import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalProducersComponent } from './interval-producers.component';

describe('IntervalProducersComponent', () => {
  let component: IntervalProducersComponent;
  let fixture: ComponentFixture<IntervalProducersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervalProducersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntervalProducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
