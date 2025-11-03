#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
// Questo 'require' fallirà finché non sistemi analyzer.js!
const { countWords, countLines, countChars } = require('./src/analyzer');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Errore: Devi specificare un percorso per il file di testo.');
  process.exit(1);
}

const fullPath = path.resolve(filePath);

fs.readFile(fullPath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Errore nella lettura del file: ${err.message}`);
    process.exit(1);
  }

  console.log(`--- Statistiche per ${filePath} ---`);
  console.log(`Caratteri: ${countChars(data)}`);
  console.log(`Parole: ${countWords(data)}`);
  console.log(`Righe: ${countLines(data)}`);
  console.log('---------------------------------');
});
