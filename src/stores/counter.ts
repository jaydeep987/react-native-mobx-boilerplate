import { action, observable } from 'mobx';

/**
 * Counter store
 */
export class CounterStore {
  /** Observalbe prop to hold count */
  @observable count = 0;

  /** Action which will update count in store */
  @action setCount(count: number): void {
    this.count = count;
  }

  /** Action to increment counter by 1 */
  @action increment(): void {
    this.count = this.count + 1;
  }

  /** Action to decrement counter by 1 */
  @action decrement(): void {
    this.count = this.count - 1;
  }
}

export const counterStore = new CounterStore();
