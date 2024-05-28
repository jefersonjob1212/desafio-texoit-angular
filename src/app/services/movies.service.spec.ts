import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MoviesService } from './movies.service';
import { ArrayResponse } from 'app/models/array-response';
import { Year } from 'app/models/year';
import { environment } from 'environments/environment';
import { Studio } from 'app/models/studio';
import { MaxMinWinIntervalForProducers } from 'app/models/max-min-producers';
import { Movie } from 'app/models/movie';
import { PageableResponse } from 'app/models/pageable-response';

describe('MoviesService', () => {
  let service: MoviesService;
  let testingController: HttpTestingController;
  let testUrlApi: string = environment.apiUrlBase;
  let movies: PageableResponse<Movie> = {
    content: [],
    empty: true,
    first: true,
    last: false,
    number: 0,
    numberOfElements: 0,
    pageable: {
      offset: 0,
      paged: true,
      pageNumber: 0,
      pageSize: 10,
      sort: {
        empty: true,
        sorted: false,
        unsorted: false,
      },
      unpaged: false
    },
    size: 10,
    sort: {
      empty: true,
      sorted: false,
      unsorted: false,
    },
    totalElements: 0,
    totalPages: 0
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
    });
    service = TestBed.inject(MoviesService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be getYearsWithMultipleWinners', () => {
    const years: ArrayResponse<Year> = { data: [] };
    service.getYearsWithMultipleWinners().subscribe({next: yearsResp => {
      expect(yearsResp).toEqual(years)
    }});

    const req = testingController.expectOne(`${testUrlApi}?projection=years-with-multiple-winners`)
    expect(req.request.method).toEqual('GET');
    req.flush(years);
  });  

  it('should be getStudiosWithWinCount', () => {
    const studios: ArrayResponse<Studio> = { data: [] };
    service.getStudiosWithWinCount().subscribe({next: studiosResp => {
      expect(studiosResp).toEqual(studios)
    }});

    const req = testingController.expectOne(`${testUrlApi}?projection=studios-with-win-count`)
    expect(req.request.method).toEqual('GET');
    req.flush(studios);
  });

  it('should be getMaxMinWinIntervalForProducers', () => {
    const maxMin: MaxMinWinIntervalForProducers = { max: [], min: [] };
    service.getMaxMinWinIntervalForProducers().subscribe({next: maxMinResp => {
      expect(maxMinResp).toEqual(maxMin)
    }});

    const req = testingController.expectOne(`${testUrlApi}?projection=max-min-win-interval-for-producers`)
    expect(req.request.method).toEqual('GET');
    req.flush(maxMin);
  });  

  it('should be getWinnerByYear', () => {
    const year = 1986;
    const movies: Movie[] = [];
    service.getWinnerByYear(year).subscribe({next: moviesResp => {
      expect(moviesResp).toEqual(movies)
    }});

    const req = testingController.expectOne(`${testUrlApi}?winner=true&year=${year}`)
    expect(req.request.method).toEqual('GET');
    req.flush(movies);
  });  

  it('should be getMoviesByParams only page and page size', () => {
    const params = 'page=0&size=10'
    service.getMoviesByParams(params).subscribe({next: moviesResp => {
      expect(moviesResp).toEqual(movies)
    }});

    const req = testingController.expectOne(`${testUrlApi}?${params}`)
    expect(req.request.method).toEqual('GET');
    req.flush(movies);
  }); 

  it('should be getMoviesByParams only page, page size and year', () => {
    const params = 'page=0&size=10&year=1986'
    service.getMoviesByParams(params).subscribe({next: moviesResp => {
      expect(moviesResp).toEqual(movies)
    }});

    const req = testingController.expectOne(`${testUrlApi}?${params}`)
    expect(req.request.method).toEqual('GET');
    req.flush(movies);
  });

  it('should be getMoviesByParams only page, page size and is winner', () => {
    const params = 'page=0&size=10&winner=true'
    service.getMoviesByParams(params).subscribe({next: moviesResp => {
      expect(moviesResp).toEqual(movies)
    }});

    const req = testingController.expectOne(`${testUrlApi}?${params}`)
    expect(req.request.method).toEqual('GET');
    req.flush(movies);
  });

  it('should be getMoviesByParams with all params', () => {
    const params = 'page=0&size=10&year=1986&winner=true'
    service.getMoviesByParams(params).subscribe({next: moviesResp => {
      expect(moviesResp).toEqual(movies)
    }});

    const req = testingController.expectOne(`${testUrlApi}?${params}`)
    expect(req.request.method).toEqual('GET');
    req.flush(movies);
  });
});
