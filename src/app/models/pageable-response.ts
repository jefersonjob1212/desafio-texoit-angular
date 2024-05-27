import { Pageable } from './pageable';
import { Sort } from './sort';

export class PageableResponse<T> {
  constructor(
    content: T[],
    pageable: Pageable,
    totalElements: number,
    last: boolean,
    totalPages: number,
    first: boolean,
    sort: Sort,
    number: number,
    numberOfElements: number,
    size: number,
    empty: boolean
  ) {
    this.content = content;
    this.pageable = pageable;
    this.totalElements = totalElements;
    this.last = last;
    this.totalPages = totalPages;
    this.first = first;
    this.sort = sort;
    this.number = number;
    this.numberOfElements = numberOfElements;
    this.size = size;
    this.empty = empty;
  }

  public content: T[];
  public pageable: Pageable;
  public totalElements: number;
  public last: boolean;
  public totalPages: number;
  public first: boolean;
  public sort: Sort;
  public number: number;
  public numberOfElements: number;
  public size: number;
  public empty: boolean;
}
