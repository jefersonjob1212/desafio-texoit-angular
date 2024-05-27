export class Movie {
  constructor(
    id: number,
    year: number,
    title: string,
    studios: string[],
    producers: string[],
    winner: true
  ) {
    this.id = id;
    this.year = year;
    this.title = title;
    this.studios = studios;
    this.producers = producers;
    this.winner = winner;
  }

  private id: number;
  private year: number;
  private title: string;
  private studios: string[];
  private producers: string[];
  private winner: true;

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getYear(): number {
    return this.year;
  }

  public setYear(year: number): void {
    this.year = year;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getStudios(): string[] {
    return this.studios;
  }

  public setStudios(studios: string[]): void {
    this.studios = studios;
  }

  public getProducers(): string[] {
    return this.producers;
  }

  public setProducers(producers: string[]): void {
    this.producers = producers;
  }

  public isWinner(): boolean {
    return this.winner;
  }
}
