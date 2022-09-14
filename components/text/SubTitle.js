import P from './P';
import { styled } from 'utils/styling';

const SubTitle = styled(P)`
  font-family: ${({ theme }) => theme.fontFamily.subTitle};
  font-size: 1.5em;
  font-weight: bold;
  margin: 0 0 15px;
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
