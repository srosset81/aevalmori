import React from 'react';
import NextLink from 'next/link';
import { I18n } from '@lingui/react';
import getUrl from './getUrl';

const PageLink = ({ page, param, ...otherProps }) => (
  <I18n>
    {({ i18n }) => (
      <span style={{ cursor: 'pointer' }}>
        <NextLink href={getUrl(page, i18n._language || 'fr', param)} {...otherProps} />
      </span>
    )}
  </I18n>
);

export default PageLink;
