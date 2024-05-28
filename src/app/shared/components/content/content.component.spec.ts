import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterTestingHarness } from '@angular/router/testing';
import { ContentComponent } from './content.component';
import { provideRouter } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Location } from '@angular/common';
import { HomeComponent } from 'app/pages/home/home.component';
import { ListMoviesComponent } from 'app/pages/list-movies/list-movies.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContentComponent,
        HttpClientTestingModule,
        HomeComponent,
        ListMoviesComponent,
      ],
      providers: [
        provideRouter([{
          path: '',
          component: HomeComponent,
        },
        {
          path: 'list-movies',
          component: ListMoviesComponent,
        }])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be create sidebar', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const divSideBar = element.getElementsByClassName('col-3')[0];
    expect(divSideBar).toBeTruthy();
  });

  it('should be create Content Element', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const divSideBar = element.getElementsByClassName('col-9')[0];
    expect(divSideBar).toBeTruthy();
  });

  it("should be navigate a route '/'", fakeAsync(async () => {
    const location = TestBed.inject(Location);
    console.log(location.path());
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/', HomeComponent);    
    harness.detectChanges();
    expect(harness.routeNativeElement?.innerHTML).toContain('/');
  }));

  it("should be navigate a route '/list-movies'", fakeAsync(async () => {
    const location = TestBed.inject(Location);
    console.log(location.path());
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/list-movies', ListMoviesComponent);    
    harness.detectChanges();
    expect(harness.routeNativeElement?.innerHTML).toContain('/');
  }));
});
