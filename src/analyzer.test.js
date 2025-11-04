const { countWords, countLines, countChars } = require('./analyzer');

describe('Text Analyzer Logic', () => {
  describe('countWords', () => {
    it('should return 0 for empty string', () => {
      expect(countWords('')).toBe(0);
    });
    it('should return 0 for null/undefined', () => {
      expect(countWords(null)).toBe(0);
    });
    it('should count words correctly', () => {
      expect(countWords('ciao mondo')).toBe(2);
    });
    it('should handle extra spaces', () => {
      expect(countWords(' ciao   mondo  ')).toBe(2);
    });
  });

  describe('countLines', () => {
    it('should return 0 for empty string', () => {
      expect(countLines('')).toBe(0); // O 1, a seconda di come la interpreti! Decidi tu.
    });
    it('should count multiple lines', () => {
      expect(countLines('riga1\nriga2\nriga3')).toBe(3);
    });
  });

  // ... Aggiungi test per countChars
  describe('countChars', () => {
    it('should return 0 for empty string', () => {
      expect(countChars('')).toBe(0);
    });

    it('should return the number of characters of the text string', () => {
      expect(countChars('Hello')).toBe(5);
    });
  });
});
