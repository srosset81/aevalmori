import routes from './routes';

const getUrl = (pageName, lang, param) => {
  let path;

  if (pageName === 'index') {
    path = '';
  } else {
    if (routes[pageName]) {
      if (routes[pageName][lang]) {
        path = routes[pageName][lang];
      } else {
        path = routes[pageName]['fr'];
      }
    } else {
      path = pageName;
    }
  }

  return '/' + lang + '/' + path + (param ? '/' + param : '');
};

export default getUrl;
