import { CounterStore } from '../../src/stores/counter';

describe('Test Store: CounterStore', () => {
  let counterStore: CounterStore;

  beforeAll(() => {
    counterStore = new CounterStore();
  });

  it('should have initial value 0', () => {
    expect(counterStore.count)
      .toBe(0);
  });

  it('should increment on action call', () => {
    counterStore.increment();

    expect(counterStore.count)
      .toBe(1);
  });

  it('should decrement on action call', () => {
    counterStore.decrement();

    expect(counterStore.count)
      .toBe(0);
  });

  it('should set counter value on action call', () => {
    expect(counterStore.count)
      .toBe(0);

    counterStore.setCount(5);

    expect(counterStore.count)
      .toBe(5);
  });
});
