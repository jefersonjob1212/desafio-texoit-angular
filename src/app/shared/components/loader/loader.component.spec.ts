import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import { LoaderService } from 'app/shared/services/loader.service';
import { By } from '@angular/platform-browser';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let loaderService: LoaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    loaderService = TestBed.inject(LoaderService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show loader', () => {
    loaderService.concurrentReq = 0;
    loaderService.show();
    fixture.detectChanges();
    expect(loaderService.concurrentReq).toEqual(1);
  });  
  
  it('should hide loader', () => {
    loaderService.concurrentReq = 1;
    loaderService.hide();
    fixture.detectChanges();
    expect(loaderService.concurrentReq).toEqual(0);
  });
});
