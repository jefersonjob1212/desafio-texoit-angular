import { IFilterOptions } from "./i-filter-options";

export interface IColumnHeaderOptions {
    columnName: string;
    columnLabel: string;
    filterOptions?: IFilterOptions
}