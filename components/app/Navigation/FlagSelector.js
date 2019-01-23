import React from 'react';
import PropTypes from 'prop-types';

import { styled } from 'utils/styling';

import { Image } from 'components/media';
import { Div, AbsoluteDiv } from 'components/layout';

const SlidingDiv = styled(AbsoluteDiv)`
  background-color: #F7F7F7;
  z-index: -1;
  transition: all 0.3s ease-out;
  border-top: 1px #dddddd solid;
  border-right: 1px #dddddd solid;
  border-left: 1px #dddddd solid;
`;

const ClickableDiv = styled(Div)`
  cursor: pointer;
`;

const availableLocales = [
    'fr',
    'it'
];

class FlagSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
        };
    }

    showMenu = () => {
        this.setState({ showMenu: true });
        document.addEventListener('click', this.closeMenu);
    };

    closeMenu = (event) => {
        if (this.slidingDiv && !this.slidingDiv.contains(event.target)) {
            this.setState({ showMenu: false });
            document.removeEventListener('click', this.closeMenu);
        }
    };

    onSelect = (value) => {
        if( this.props.onChange ) this.props.onChange(value);
        this.setState({ showMenu: false });
        document.removeEventListener('click', this.closeMenu);
    };

    render() {
        const { value } = this.props;
        const otherLocale = availableLocales.find(locale => locale !== value);
        return (
            <ClickableDiv w="100%" h="100%" align="middle" onClick={this.showMenu}>
                <Image src={`/static/images/flag_${value}.png`} w="30px" />
                <SlidingDiv innerRef={e => this.slidingDiv = e} top={this.state.showMenu ? '-45px' : '0'} bottom={this.state.showMenu ? '45px' : '0'} left="-1px" right="-3px" align="middle" onClick={() => this.onSelect(otherLocale)}>
                    <Image src={`/static/images/flag_${otherLocale}.png`} w="30px" />
                </SlidingDiv>
            </ClickableDiv>
        );
    }
}

FlagSelector.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default FlagSelector;