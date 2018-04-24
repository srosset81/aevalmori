import React from 'react';
import PropTypes from 'prop-types';
import Div from '../layout/Div';
import Text from '../text/Text';

const Label = ({ value, children }) => (
  <Div p="5px 0">
    <Text italic>{value}</Text>
    {children}
  </Div>
);

Label.propTypes = {
  value: PropTypes.string,
  childre: PropTypes.node
};

export default Label;
