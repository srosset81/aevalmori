import P from './P';

const SubTitle = ({ children, ...otherProps }) => (
  <P bold fontSize="1.5em" lineHeight="1em" m="0 0 15px" {...otherProps}>
    {children}
  </P>
);

export default SubTitle;
