import React from 'react';
import PropTypes from 'prop-types';
import { styled, mediaQuery } from '../../utils/styling';
import Div from '../layout/Div';
import P from '../text/P';
import LeadP from '../text/LeadP';

// prettier-ignore
const ContentSection = styled(Div)`
  padding: 25px;
  ${mediaQuery('sm')} {
    padding: 50px;
  }
  ${LeadP} {
    margin-bottom: 25px;
    ${mediaQuery('sm')} {
      margin-bottom: 50px;
    }
    text-align: justify;
  }
  ${P} {
    text-align: justify;
  }
  ${P}:first-of-type {
    margin-top: 0;
  }
  ${P}:last-of-type {
    margin-bottom: 0;
  }
`;

ContentSection.propTypes = {
  p: PropTypes.string,
  horizontal: PropTypes.bool
};

ContentSection.defaultProps = {
  p: '3px'
};

export default ContentSection;
