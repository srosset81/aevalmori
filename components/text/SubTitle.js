import P from './P';
import { styled, css } from 'utils/styling';

const SubTitle = styled(P)`
  font-family: ${({ theme }) => theme.fontFamily.subTitle};
  ${props => props.large ? css`font-size: 2em;` : css`font-size: 1.5em;`}
  font-weight: bold;
  margin: 0px 0 15px;
  line-height: 1.2em;
  text-transform: uppercase;
  letter-spacing: 2px;

  a,
  a:hover {
    color: black;
    text-decoration: none;
  }
`;

export default SubTitle;
