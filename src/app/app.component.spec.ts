import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component'; 
import { RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create elements navbar and content', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const debugNavbarElement = fixture.debugElement.query(By.css('app-navbar'));
    const debugContentElement = fixture.debugElement.query(By.css('app-content'));
    expect(debugNavbarElement).toBeTruthy();
    expect(debugContentElement).toBeTruthy();
  });
});
