import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArrayResponse } from 'app/models/array-response';
import { MaxMinWinIntervalForProducers } from 'app/models/max-min-producers';
import { Movie } from 'app/models/movie';
import { PageableResponse } from 'app/models/pageable-response';
import { Studio } from 'app/models/studio';
import { Year } from 'app/models/year';
import { environment } from 'environments/environment';
import { Observable, last } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private endpoint: string = environment.apiUrlBase;

  constructor(private http: HttpClient) {}

  getMoviesByParams(params: string): Observable<PageableResponse<Movie>> {
    const url = `${this.endpoint}?${params}`;
    return this.http.get<PageableResponse<Movie>>(url).pipe(last());
  }

  getYearsWithMultipleWinners(): Observable<ArrayResponse<Year>> {
    const url = `${this.endpoint}?projection=years-with-multiple-winners`;
    return this.http
      .get<ArrayResponse<Year>>(url);
  }

  getStudiosWithWinCount(): Observable<ArrayResponse<Studio>> {
    const url = `${this.endpoint}?projection=studios-with-win-count`;
    return this.http.get<ArrayResponse<Studio>>(url);
  }

  getMaxMinWinIntervalForProducers(): Observable<MaxMinWinIntervalForProducers> {
    const url = `${this.endpoint}?projection=max-min-win-interval-for-producers`;
    return this.http.get<MaxMinWinIntervalForProducers>(url);
  }

  getWinnerByYear(year: number): Observable<Movie[]> {
    const url = `${this.endpoint}?winner=true&year=${year}`;
    return this.http.get<Movie[]>(url);
  }
}
