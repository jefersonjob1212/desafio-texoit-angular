import { Sort } from './sort';

export class Pageable {
  constructor(
    sort: Sort,
    pageSize: number,
    pageNumber: number,
    offset: number,
    paged: boolean,
    unpaged: boolean
  ) {
    this.sort = sort;
    this.pageSize = pageSize;
    this.pageNumber = pageNumber;
    this.offset = offset;
    this.paged = paged;
    this.unpaged = unpaged;
  }

  public sort: Sort;
  public pageSize: number;
  public pageNumber: number;
  public offset: number;
  public paged: boolean;
  public unpaged: boolean;
}
