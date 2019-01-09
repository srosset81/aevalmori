import { styled, alignStyle, mediaQuery, responsiveStyle, responsivePropType } from '../../utils/styling';

// prettier-ignore
const Container = styled.div`
  margin: 0px auto;
  width: 1040px;
  ${alignStyle}
  ${responsiveStyle({ p: 'padding' })}
  
  ${mediaQuery('xs','lg')} {
    width: 100%;
  }
`;

Container.propTypes = {
  p: responsivePropType
};

Container.defaultProps = {
  p: { xs: '50px 5px', sm: '30px 10px' }
};

export default Container;
