import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { By } from '@angular/platform-browser';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  const allPages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click the next page', () => {
    component.next$.subscribe((resp: number) => {
      expect(resp).toEqual(1);
    });
    component.page = 0;
    component.next();
    fixture.detectChanges();
    expect(component.page).toEqual(1);
  });

  it('should click the previous page', () => {
    component.prev$.subscribe((resp: number) => {
      expect(resp).toEqual(0);
    });
    component.page = 1;
    component.prev();
    fixture.detectChanges();
    expect(component.page).toEqual(0);
  });

  it('should click the first page', () => {
    component.first$.subscribe((resp: number) => {
      expect(resp).toEqual(0);
    });
    component.page = 1;
    component.first();
    fixture.detectChanges();
    expect(component.page).toEqual(0);
    expect(component.isFirstPage()).toBeTrue();
    expect(component.isLastPage()).toBeFalse();
  });

  it('should click the last page', () => {
    component.last$.subscribe((resp: number) => {
      expect(resp).toEqual(9);
    });
    component.page = 1;
    component.totalPages = allPages.length;
    component.allPages = allPages;
    component.last();
    fixture.detectChanges();
    expect(component.page).toEqual(9);
    expect(component.isFirstPage()).toBeFalse();
    expect(component.isLastPage()).toBeTrue();
  });

  it('should click the select page', () => {
    component.selectPage$.subscribe((resp: number) => {
      expect(resp).toEqual(3);
    });
    component.page = 1;
    component.totalPages = allPages.length;
    component.allPages = allPages;
    component.selectPage(3);
    fixture.detectChanges();
    expect(component.page).toEqual(3);
    expect(component.isFirstPage()).toBeFalse();
    expect(component.isLastPage()).toBeFalse();
  });

  it('should click the next page and change pages to visible', () => {
    component.next$.subscribe((resp: number) => {
      expect(resp).toEqual(5);
    });
    component.page = 4;
    component.totalPages = allPages.length;
    component.allPages = allPages;
    component.pagesToShow = [];
    spyOn(component, 'refreshPages').and.callThrough();
    component.selectPage(5);
    component.refreshPages();
    fixture.detectChanges();
    expect(component.page).toEqual(5);
    expect(component.pagesToShow[0]).toEqual(5);
    expect(component.pagesToShow[4]).toEqual(9);
    expect(component.isFirstPage()).toBeFalse();
    expect(component.isLastPage()).toBeFalse();
  });
});
