import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { IColumnHeaderOptions } from 'app/interfaces/i-column-header-options';
import { IFilterOptions } from 'app/interfaces/i-filter-options';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnChanges, OnDestroy {

  @Input('data')
  data: any[] = [];

  @Input('columnsHeader')
  columnsHeader: IColumnHeaderOptions[] = [];

  @Input('hasFilter')
  hasFilter: boolean = false;

  @Input('filterOptions')
  filterOptions: IFilterOptions[] | undefined;

  @Input('classHeader')
  classHeader: string = '';

  @Output('filter')
  private filter$: Subject<any> = new Subject<any>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  isBooleanType(property: any): boolean {
    return typeof property == "boolean";
  }

  filterBySelect(event: any): void {
    this.filter$.next(event);
  }

  filterByInput(event: any, maxlength: number | undefined): void {
    const value = event.target.value;
    console.log(value);
    if(maxlength && value.length <= maxlength) {
      event.preventDefault();
      this.filter$.next(event);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes['data'].currentValue;
    this.changeDetectorRef.detectChanges();
  }
  
  ngOnDestroy(): void {
    this.filter$.unsubscribe();
  }
}
