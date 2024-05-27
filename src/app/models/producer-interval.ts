export class ProducerInterval {
  constructor(
    producer: string,
    interval: number,
    previousWin: number,
    followingWin: number
  ) {
    this.producer = producer;
    this.interval = interval;
    this.previousWin = previousWin;
    this.followingWin = followingWin;
  }

  public producer: string;
  public interval: number;
  public previousWin: number;
  public followingWin: number;
}
