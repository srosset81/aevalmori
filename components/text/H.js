import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

const H = ({ size, ...otherProps }) => {
  const BaseElement = 'h' + size;
  return (
    <BaseElement>
      <Text bold font="openSans" {...otherProps} />
    </BaseElement>
  );
};

H.propTypes = {
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6'])
};

H.defaultProps = {
  size: '1'
};

export default H;
