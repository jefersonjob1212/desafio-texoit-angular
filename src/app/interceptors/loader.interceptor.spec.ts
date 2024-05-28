import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';

import { loaderInterceptor } from './loader.interceptor';
import { LoaderService } from 'app/shared/services/loader.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('loaderInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => loaderInterceptor(req, next));

  let loaderService: LoaderService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    loaderService = TestBed.inject(LoaderService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should be intercepted', () => {
    const url = 'https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers';
    httpClient.get(url).subscribe({
      complete: () => {
      }
    });
    const req = httpTestingController.expectOne(url);
    expect(loaderService.concurrentReq).toEqual(0);
    req.flush({}, { status: HttpStatusCode.Ok, statusText: 'ok'})
  });
});
