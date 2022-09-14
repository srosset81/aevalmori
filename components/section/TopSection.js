import { Div } from 'components/layout';
import { BgImage } from 'components/media';
import { P } from 'components/text';
import { AnimOnAppear } from 'components/motion';

const TopSection = ({ image, position, subTitle, children }) => (
  <BgImage src={`/static/images/${image}`} h={{ xs: '250px', md: '400px' }} align="middle" position={position}>
    <Div>
      <AnimOnAppear>
        <P
          shadow
          color="white"
          align="center"
          font="title"
          fontSize={{ xs: '4.5em', md: '4em' }}
          m="0"
          lineHeight="1em"
        >
          {children}
        </P>
        {subTitle &&
          <P shadow color="white" align="center" fontSize={{ xs: '1.5em', md: '2em' }} lineHeight="0.8em" italic m="0">
            {subTitle}
          </P>
        }
      </AnimOnAppear>
    </Div>
  </BgImage>
);

export default TopSection;
