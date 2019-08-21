import routes from './routes';

const getUrl = (pageName, lang) => {
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

  return '/' + lang + '/' + path;
};

export default getUrl;
