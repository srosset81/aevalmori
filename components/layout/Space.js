import { styled, responsiveStyle, responsivePropType } from '../../utils/styling';

const Space = styled.div`
  width: 100%;
  ${responsiveStyle({ h: 'height' })};
`;

Space.propTypes = {
  h: responsivePropType
};

Space.defaultProps = {
  h: '15px'
};

export default Space;
