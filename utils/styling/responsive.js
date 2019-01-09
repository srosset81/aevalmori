import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme';

const formatValue = value => (typeof value === 'number' ? `${value * 100}%` : value);

const standardResponsiveProps = {
  fontSize: 'font-size',
  m: 'margin',
  p: 'padding',
  w: 'width'
};

export const responsiveStyle = (responsiveProps = standardResponsiveProps) => props => {
  const result = [];
  Object.keys(responsiveProps).forEach(jsProp => {
    if (!props.hasOwnProperty(jsProp)) {
      // no props set, move along.
      return;
    }
    let cssText;
    const cssProp = responsiveProps[jsProp];
    if (!props[jsProp] || typeof props[jsProp] !== 'object') {
      // not an object, use its value directly
      result.push(`${cssProp}: ${formatValue(props[jsProp])};`);
    } else {
      Object.keys(props[jsProp]).forEach(size => {
        if (!theme.breakpoints.hasOwnProperty(size)) {
          throw new Error(
            `Calling responsiveStyle with an invalid size name (${size}), valid ones are [${Object.keys(
              theme.breakpoints
            ).join(', ')}]`
          );
        }
        if (theme.breakpoints[size] && props[jsProp][size]) {
          result.push(`
            @media (min-width: ${theme.breakpoints[size]}) {
              ${cssProp}: ${formatValue(props[jsProp][size])};
            }
          `);
        }
      });
    }
  });
  return result.join('');
};

export const responsivePropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]);

export const mediaQuery = (minSize, maxSize) => props => {
  if (maxSize) {
    return `
      @media (min-width: ${props.theme.breakpoints[minSize]}) 
         and (max-width: ${props.theme.breakpoints[maxSize]})
      `;
  } else {
    return `@media (min-width: ${props.theme.breakpoints[minSize]})`;
  }
};
