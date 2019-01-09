import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'utils/styling';

const hiddenStyles = props => {
  const result = [];
  Object.keys(props.theme.breakpoints).map(size => {
    if (props[size]) {
      result.push(`
            @media (min-width: ${props.theme.breakpoints[size]}) {
              display: none;
            }
          `);
    }
  });
  return result.join('');
};

// prettier-ignore
const Hidden = styled.div`
  ${hiddenStyles}
`;

Hidden.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool
};

Hidden.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false
};

export default Hidden;
