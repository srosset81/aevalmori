import React from 'react';
import { responsiveStyle, responsivePropType } from 'utils/styling';
import { translate } from 'utils/intl';
import Text from './Text';

const BaseP = ({ children, className }) => <p className={className}>{translate(children)}</p>;

// prettier-ignore
const P = Text.withComponent(BaseP).extend`
  display: block;
  width: 100%;
  ${responsiveStyle({align: 'text-align'})}
`;

P.propTypes = {
  align: responsivePropType
};

export default P;
