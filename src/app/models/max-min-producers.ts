import { ProducerInterval } from './producer-interval';

export class MaxMinWinIntervalForProducers {
  constructor(min: ProducerInterval[], max: ProducerInterval[]) {
    this.min = min;
    this.max = max;
  }

  public min: ProducerInterval[];
  public max: ProducerInterval[];
}
