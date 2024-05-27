import { FilterTypeEnum } from "app/enums/filter-type.enum";

export interface IFilterOptions {
    type: FilterTypeEnum;
    options?: any[];
    maxlength?: number | undefined;
}