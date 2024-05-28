import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { IColumnHeaderOptions } from 'app/interfaces/i-column-header-options';
import { By } from '@angular/platform-browser';
import { FilterTypeEnum } from 'app/enums/filter-type.enum';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let columnOptionsWithoutFilter: IColumnHeaderOptions[] = [
    {
      columnLabel: 'ID',
      columnName: 'id',
    },
    {
      columnLabel: 'Year',
      columnName: 'year',
    },
    {
      columnLabel: 'Title',
      columnName: 'title',
    },
    {
      columnLabel: 'Winner?',
      columnName: 'winner',
    },
  ];

  let columnOptionsWithFilter: IColumnHeaderOptions[] = [
    {
      columnLabel: 'ID',
      columnName: 'id',
    },
    {
      columnLabel: 'Year',
      columnName: 'year',
      filterOptions: {
        type: FilterTypeEnum.INPUT_NUMBER,
        maxlength: 4,
      },
    },
    {
      columnLabel: 'Title',
      columnName: 'title',
    },
    {
      columnLabel: 'Winner?',
      columnName: 'winner',
      filterOptions: {
        type: FilterTypeEnum.SELECT,
        options: [
          { id: null, label: 'Yes/No' },
          { id: true, label: 'Yes' },
          { id: false, label: 'No' },
        ],
      },
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add columns', () => {
    component.columnsHeader = columnOptionsWithoutFilter;
    fixture.detectChanges();
    const columns = fixture.debugElement.queryAll(By.css('th'));
    expect(columns.length).toEqual(columnOptionsWithoutFilter.length);
    for (let index = 0; index < columns.length; index++) {
      const element = columns[index];
      expect(element.nativeElement.innerText).toEqual(
        columnOptionsWithoutFilter[index].columnLabel
      );
    }
  });  

  it('should add columns with filter', () => {
    component.columnsHeader = columnOptionsWithFilter;
    fixture.detectChanges();
    const columns = fixture.debugElement.queryAll(By.css('th'));
    expect(columns.length).toEqual(columnOptionsWithoutFilter.length);
    for (let index = 0; index < columns.length; index++) {
      const element = columns[index];
      const option = columnOptionsWithFilter[index];
      const innerHtml = element.nativeElement.innerHTML;
      const expected = (option.filterOptions?.type === FilterTypeEnum.INPUT_NUMBER && innerHtml.indexOf('input') > 1)
        || (option.filterOptions?.type === FilterTypeEnum.SELECT && innerHtml.indexOf('select') > 1)
        || !option.filterOptions;

      expect(innerHtml).toContain(option.columnLabel);
      expect(expected).toBeTruthy();
    }
  });
});
