/* eslint-disable */ window.LINGUI_CATALOG = {
  languageData: {
    plurals: function(n, ord) {
      var s = String(n).split('.'),
        v0 = !s[1];
      if (ord) return n == 11 || n == 8 || n == 80 || n == 800 ? 'many' : 'other';
      return n == 1 && v0 ? 'one' : 'other';
    }
  },
  messages: {
    'about.my-journey': 'Il mio percorso',
    'about.title': 'Chi sono ?',
    'home.work': 'Psicologa',
    'menu.about': 'Chi sono ?',
    'menu.contact': 'Contatto',
    'menu.dmoka': 'D.M.O.K.A.',
    'menu.family-constellations': 'Costellazioni familiari',
    'menu.home': 'Accoglienza',
    'menu.individual-consulting': 'Consultazioni individuali',
    'menu.links': 'Liens amis',
    'menu.online-consulting': 'Consultazioni online',
    'menu.testimony': 'Testimonianze',
    'testimonies.title': 'Testimonianze'
  }
};
