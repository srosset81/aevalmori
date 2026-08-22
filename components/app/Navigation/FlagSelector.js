import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { styled, theme } from 'utils/styling';

import { Image } from 'components/media';
import { Div, AbsoluteDiv } from 'components/layout';

const SlidingDiv = styled(AbsoluteDiv)`
  background-color: #f7f7f7;
  z-index: 10;
  border-top: 1px #dddddd solid;
  border-right: 1px #dddddd solid;
  border-left: 1px #dddddd solid;
`;

const ClickableDiv = styled(Div)`
  cursor: pointer;
  transition: all ease-in-out 200ms;
  &:hover {
    background-color: ${theme.colors.white};
  }
`;

const availableLocales = ['fr', 'it'];

const FlagSelector = ({ value, onChange }) => {
  const [showMenu, setShowMenu] = useState(false);
  const containerRef = useRef(null);
  const otherLocale = availableLocales.find(locale => locale !== value);

  useEffect(() => {
    if (!showMenu) return undefined;

    const closeMenu = event => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const onSelect = locale => {
    setShowMenu(false);
    if (onChange) onChange(locale);
  };

  return (
    <ClickableDiv ref={containerRef} w="100%" h="100%" align="middle" onClick={() => setShowMenu(true)}>
      <Image src={`/static/images/flag_${value}.png`} w="30px" />
      {showMenu && (
        <SlidingDiv top="-45px" left="-1px" right="-1px" h="45px" align="middle" onClick={() => onSelect(otherLocale)}>
          <Image src={`/static/images/flag_${otherLocale}.png`} w="30px" />
        </SlidingDiv>
      )}
    </ClickableDiv>
  );
};

FlagSelector.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default FlagSelector;
