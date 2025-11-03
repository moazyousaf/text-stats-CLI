// Questa è la "logica di business" da testare

function countWords(text) {
  if (!text) return 0;
  // Semplice split sugli spazi, ma ignora stringhe vuote
  return text.split(/\s+/).filter(Boolean).length;
}

function countLines(text) {
  if (!text) return 0;
  // Lo split su '\n' crea un array. Se c'è testo, c'è almeno 1 riga.
  return text.split('\n').length;
}

function countChars(text) {
  return text ? text.length : 0;
}

// Nota: NON esportiamo le funzioni (primo problema da risolvere!)
// Dovrai aggiungere: module.exports = { countWords, countLines, countChars };
