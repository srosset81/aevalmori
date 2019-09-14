import P from './P';

const LeadP = ({ children, ...otherProps }) => (
  <P italic bold fontSize="1.5em" lineHeight="1.2em" m="0" {...otherProps}>
    {children}
  </P>
);

export default LeadP;
