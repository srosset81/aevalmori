import React from 'react';
import PropTypes from 'prop-types';
import { styled, mediaQuery } from '../../utils/styling';
import Div from '../layout/Div';
import P from '../text/P';
import LeadP from '../text/LeadP';
import SubTitle from '../text/SubTitle';

// prettier-ignore
const ContentSection = styled(Div)`
  padding: 25px;
  ${mediaQuery('sm')} {
    padding: 50px;
  }
  ${P}:first-of-type {
    margin-top: 0;
  }
  ${P}:last-of-type {
    margin-bottom: 0;
  }
  ${P}:last-of-type:after {
    clear: both;
  }
  ${LeadP} {
    margin-bottom: 25px;
    ${mediaQuery('sm')} {
      margin-bottom: 50px;
    }
    text-align: left;
  }
  ${SubTitle} {
    text-align: left;
    margin-top: 30px;
    font-size: 1.2em;
    
    ${mediaQuery('sm')} {
      margin-top: 45px;
      font-size: 1.5em;
    }
  }
  ul {
    overflow: hidden;
  }
  li {
    margin-left: -20px;
    padding-left: 10px;
    margin-bottom: 15px;
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
