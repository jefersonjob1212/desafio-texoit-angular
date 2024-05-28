import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be loader is show', () => {
    service.concurrentReq = 0;
    service.show();
    expect(service.concurrentReq).toEqual(1);
    service.isLoading.subscribe((result) => {
      expect(result).toEqual(1);
    })
  });

  it('should be loader is hide', () => {
    service.concurrentReq = 0;
    service.show();
    expect(service.concurrentReq).toEqual(1);
    service.hide();
    expect(service.concurrentReq).toEqual(0);
    service.isLoading.subscribe((result) => {
      expect(result).toEqual(0);
    });
  })
});
