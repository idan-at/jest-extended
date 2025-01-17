import predicate from './predicate';

describe('toBeEven Predicate', () => {
  test('returns true when given an even number', () => {
    expect(predicate(2)).toBe(true);
  });

  test('returns false when given an odd number', () => {
    expect(predicate(1)).toBe(false);
  });

  test.each([[false], [''], [[]], [{}], [() => {}], [undefined], [null], [NaN]])(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    },
  );
});
