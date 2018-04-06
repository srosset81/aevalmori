import React from 'react';
import { translate } from 'utils/intl';
import P from './P';

const BaseTitle = ({ children, className }) => <h1 className={className}>{translate(children)}</h1>;

const PageTitle = P.withComponent(BaseTitle).extend`
    font-family: ${props => props.theme.fontFamily.montserrat};
`;

PageTitle.defaultProps = {
  fontSize: { xs: '1.5em', sm: '2em', md: '2.5em' }
};

export default PageTitle;
