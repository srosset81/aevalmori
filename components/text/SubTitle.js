import P from './P';

const SubTitle = ({ children, ...otherProps }) => (
  <P
    bold
    fontSize="1.5em"
    font="caviarDreams"
    lineHeight="1.2em"
    m="0 0 15px"
    style={{ textTransform: 'uppercase', letterSpacing: 2 }}
    {...otherProps}
  >
    {children}
  </P>
);

export default SubTitle;
