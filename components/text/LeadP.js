import { styled } from 'utils/styling';
import P from './P';

const LeadP = ({ children, ...otherProps }) => (
  <P italic bold fontSize={{ xs: '1.2em', md: '1.5em' }} lineHeight="1.2em" m="0" {...otherProps}>
    {children}
  </P>
);

// Allows to refer to this component in other styled-components
// See https://www.styled-components.com/docs/advanced#caveat
export default styled(LeadP)``;
