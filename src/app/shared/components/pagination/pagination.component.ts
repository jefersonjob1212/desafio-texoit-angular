import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnChanges, OnDestroy {
  pagesToShow: number[] = [];

  allPages: number[] = [];

  @Input()
  page: number = 0;

  @Input()
  totalPages: number = 0;

  @Output('prev')
  private prev$: Subject<number> = new Subject<number>();

  @Output('next')
  private next$: Subject<number> = new Subject<number>();

  @Output('first')
  private first$: Subject<number> = new Subject<number>();

  @Output('last')
  private last$: Subject<number> = new Subject<number>();

  @Output('selectPage')
  selectPage$: Subject<number> = new Subject<number>();

  onDestroy$: Subject<void> = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  prev(): void {
    this.page--;
    this.refreshPages();
    this.prev$.next(this.page);
  }

  next(): void {
    this.page++;
    this.refreshPages();
    this.next$.next(this.page);
  }

  first(): void {
    this.page = 0;
    this.refreshPages();
    this.first$.next(this.page);
  }

  last(): void {
    const totalPagesSize = this.allPages.length - 1;
    this.page = this.allPages[totalPagesSize];
    this.refreshPages();
    this.last$.next(this.page);
  }

  selectPage(page: number) {
    this.page = page;
    this.selectPage$.next(this.page);
  }

  ngOnChanges(): void {
    this.refreshPages();
  }

  ngOnDestroy(): void {
    this.prev$.unsubscribe();
    this.next$.unsubscribe();
    this.first$.unsubscribe();
    this.last$.unsubscribe();
    this.selectPage$.unsubscribe();
    this.onDestroy$.complete();
  }

  isFirstPage(): boolean {
    return this.page === 0;
  }

  isLastPage(): boolean {
    return this.page === this.allPages.length - 1;
  }

  refreshPages() {
    this.pagesToShow = [];
    this.allPages = [];
    for (let index = 0; index < this.totalPages; index++) {
      this.allPages[index] = index;
    }
    const limitSize = 5;
    let lastPageNumber = 4;
    let firstPageNumber = 0;
    if (this.totalPages < 5) {
      lastPageNumber = this.totalPages - 1;
      if(lastPageNumber >= 0) {
        for (let index = 0; index <= lastPageNumber; index++) {
          this.pagesToShow[index] = firstPageNumber + index;
        }
      }
    } else if (this.page >= limitSize) {
      const quociente = Math.trunc(this.page / 5);
      firstPageNumber = limitSize * quociente;
    }

    const lastIndex = this.totalPages < 5 ? this.totalPages - 1 : 4;

    if (lastIndex !== 0) {
      for (let index = 0; index <= lastIndex; index++) {
        const page = firstPageNumber + index;
        const pageIndex = this.allPages.findIndex((num) => num === page);

        if (pageIndex >= 0) this.pagesToShow[index] = this.allPages[pageIndex];
      }
    }
    this.changeDetectorRef.detectChanges();
  }
}
