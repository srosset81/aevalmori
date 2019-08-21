import React from 'react';
import NextLink from 'next/link';
import { I18n } from '@lingui/react';
import getUrl from './getUrl';

const PageLink = ({ page, ...otherProps }) => (
  <I18n>{({ i18n }) => <NextLink href={getUrl(page, i18n._language || 'fr')} {...otherProps} />}</I18n>
);

export default PageLink;
