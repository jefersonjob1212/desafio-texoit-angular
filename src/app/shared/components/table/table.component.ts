import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IColumnHeaderOptions } from 'app/interfaces/i-column-header-options';
import { IFilterOptions } from 'app/interfaces/i-filter-options';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
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
    return typeof property == 'boolean';
  }

  filterBySelect(event: any): void {
    this.filter$.next(event);
  }

  filterByInput(event: any, maxlength: number | undefined): void {
    if (!this.isNumberOrEnter(event)) {
      event.preventDefault();
      return;
    }
    const value = event.target.value;
    if (!value || (maxlength && value.length === maxlength)) {
      this.filter$.next(event);
    }
  }

  isNumberOrEnter(event: any): boolean {
    if (
      [40, 46, 8, 9, 13, 110, 190].indexOf(event.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (event.keyCode === 65 && (event.ctrlKey || event.metaKey)) ||
      // Allow: Ctrl+C
      (event.keyCode === 67 && (event.ctrlKey || event.metaKey)) ||
      // Allow: Ctrl+V
      (event.keyCode === 86 && (event.ctrlKey || event.metaKey)) ||
      // Allow: Ctrl+X
      (event.keyCode === 88 && (event.ctrlKey || event.metaKey)) ||
      // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return true;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (event.shiftKey || event.keyCode < 48 || event.keyCode > 57) &&
      (event.keyCode < 96 || event.keyCode > 105)
    ) {
      return false;
    }
    return true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes['data'].currentValue;
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.filter$.unsubscribe();
  }
}
