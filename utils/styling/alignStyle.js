import { css } from 'styled-components';

const alignStyle = ({ align, direction }) => {
  if (!align) return;

  let vAlign = '';
  let hAlign = '';

  // TODO: use regex to improve performances
  switch (align) {
    case 'topLeft':
      vAlign = 'flex-start';
      hAlign = 'flex-start';
      break;
    case 'top':
    case 'topCenter':
      vAlign = 'flex-start';
      hAlign = 'center';
      break;
    case 'topRight':
      vAlign = 'flex-start';
      hAlign = 'flex-end';
      break;
    case 'bottomLeft':
      vAlign = 'flex-end';
      hAlign = 'flex-start';
      break;
    case 'bottom':
    case 'bottomCenter':
      vAlign = 'flex-end';
      hAlign = 'center';
      break;
    case 'bottomRight':
      vAlign = 'flex-end';
      hAlign = 'flex-end';
      break;
    case 'middleLeft':
      vAlign = 'center';
      hAlign = 'flex-start';
      break;
    case 'middle':
    case 'middleCenter':
      vAlign = 'center';
      hAlign = 'center';
      break;
    case 'middleRight':
      vAlign = 'center';
      hAlign = 'flex-end';
      break;
    case 'middleBetween':
      vAlign = 'space-between';
      hAlign = 'center';
      break;
    // simple horizontal align. don't use flex.
    case 'center':
      return 'text-align: center;';
    case 'left':
      return 'text-align: left;';
    case 'right':
      return 'text-align: right';
    case 'justify':
      return 'text-align: justify';
    default:
      return ''; // invalid value, return nothing
  }

  return css`
    display: flex;
    flex-grow: 0;
    flex-direction: ${direction || 'row'};
    justify-content: ${vAlign};
    align-items: ${hAlign};
  `;
};

export default alignStyle;
