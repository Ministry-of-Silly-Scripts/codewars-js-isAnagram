const { isAnagram, lowerCaseAndSort } = require("../src/index");

describe('the isAnagram canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('isAnagram', () => {
  test("it should return false for inputs 'a' and 'b'", () => {
    expect(isAnagram('a', 'b')).toBe(false);
  });

  test("it should return true for inputs 'a' and 'a'", () => {
    expect(isAnagram('a', 'a')).toBe(true);
  });

  test("it should return false for inputs 'ab' and 'ac'", () => {
    expect(isAnagram('ab', 'ac')).toBe(false);
  });

  test("it should return true for inputs 'ab' and 'ba'", () => {
    expect(isAnagram('ab', 'ba')).toBe(true);
  });

  test("it should return true for inputs 'Buckethead' and 'DeathCubek'", () => {
    expect(isAnagram('Buckethead', 'DeathCubek')).toBe(true);
  });
})

describe('lowerCaseAndSort', () => {
  test("it should return abcdeehktu for inputs 'Buckethead'", () => {
    expect(lowerCaseAndSort('Buckethead')).toBe('abcdeehktu');
  });
})