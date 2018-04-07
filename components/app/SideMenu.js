import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FadeLayer } from 'components/motion';

const LeftFixedDiv = styled.div`
  position: fixed;
  top: 0;
  width: 320px;
  bottom: 0;
  z-index: ${props => props.theme.zIndex.navigation};
  background-color: ${props => props.theme.colors.grey};
  left: -350px;
  transition: transform ease-out 500ms;

  &.open {
    transform: translate3d(350px, 0, 0);
  }
`;

const SideMenu = ({ open, onClose, children }) => (
  <FadeLayer showNav visible={open} onClick={onClose}>
    <LeftFixedDiv className={open && 'open'}>{children}</LeftFixedDiv>
  </FadeLayer>
);

SideMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

SideMenu.defaultProps = {
  open: false
};

export default SideMenu;
