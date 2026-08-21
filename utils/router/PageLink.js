import React from 'react';
import NextLink from 'next/link';
import { useTolgee } from 'utils/i18n';
import getUrl from './getUrl';

const PageLink = ({ page, param, ...otherProps }) => {
  const locale = useTolgee(['language']).getLanguage();
  return (
    <span style={{ cursor: 'pointer' }}>
      <NextLink href={getUrl(page, locale || 'fr', param)} {...otherProps} />
    </span>
  );
};

export default PageLink;
