import { Div } from 'components/layout';
import { BgImage } from 'components/media';
import { P } from 'components/text';
import { AnimOnAppear } from 'components/motion';

const TopSection = ({ image, children }) => (
  <BgImage src={`/static/images/${image}`} h="400px" align="middle">
    <Div>
      <AnimOnAppear>
        <P shadow color="white" align="center" font="lobster" fontSize="4.5em" m="0">
          {children}
        </P>
      </AnimOnAppear>
    </Div>
  </BgImage>
);

export default TopSection;
