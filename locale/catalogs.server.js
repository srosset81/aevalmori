import fr from './fr/messages.json';
import it from './it/messages.json';

const catalogs = { fr, it };

function pluralIt(n, ord) {
  var s = String(n).split('.'),
      v0 = !s[1];
  if (ord) return n == 11 || n == 8 || n == 80 || n == 800 ? 'many' : 'other';
  return n == 1 && v0 ? 'one' : 'other';
}

function pluralsFr(n, ord) {
  if (ord) return n == 1 ? 'one' : 'other';
  return n >= 0 && n < 2 ? 'one' : 'other';
}

export default function getCatalog(locale) {
  return {
    messages: catalogs[locale] || catalogs.fr,
    languageData: {
      plurals: locale === 'it' ? pluralIt : pluralsFr
    },
  };
}
