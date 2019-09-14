import { Div } from 'components/layout';
import { BgImage } from 'components/media';
import { P } from 'components/text';
import { AnimOnAppear } from 'components/motion';

const TopSection = ({ image, children }) => (
  <BgImage src={`/static/images/${image}`} h={{ xs: '250px', md: '400px' }} align="middle">
    <Div>
      <AnimOnAppear>
        <P
          shadow
          color="white"
          align="center"
          font="movingSkate"
          fontSize={{ xs: '4.5em', md: '7em' }}
          m="0"
          lineHeight="1em"
        >
          {children}
        </P>
      </AnimOnAppear>
    </Div>
  </BgImage>
);

export default TopSection;
