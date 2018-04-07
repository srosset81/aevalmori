import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'utils/styling';

const visibleStyles = props => {
  const result = [];
  Object.keys(props.theme.breakpoints).map(size => {
    if (props[size]) {
      result.push(`
            @media (min-width: ${props.theme.breakpoints[size]}) {
              display: block;
            }
          `);
    }
  });
  return result.join('');
};

// prettier-ignore
const Visible = styled.div`
  display: none;
  ${visibleStyles}
`;

Visible.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool
};

Visible.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false
};

export default Visible;
