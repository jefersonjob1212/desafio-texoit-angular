export class ArrayResponse<T> {
  constructor(data: T[]) {
    this.data = data;
  }

  public data: T[];
}
