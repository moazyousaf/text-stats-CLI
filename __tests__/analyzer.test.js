const { countWords, countLines, countChars } = require('../src/analyzer');

test('word counting should return 2', () => {
  expect(countWords('ciao mondo')).toBe(2);
});

test('line counter should return 3', () => {
  expect(countLines('ciao\nmondo\nciao')).toBe(3);
});

test('word counting should return 4', () => {
  expect(countChars('ciao')).toBe(4);
});
