import React from 'react';
import { Div } from '../layout';
import { Text } from '../text';

const AnnounceSection = ({ children, link, linkCaption }) => (
  <Div bg="primaryLight" p="25px" align="center">
    <Text fontSize={{ xs: '1.2em', sm: '1.4em' }} m="0 0 10px">
      {children}
    </Text>
    {link &&
      <>
        <br />
        <a href={link} target="_blank">
          <Text italic color="black">
            {linkCaption}
          </Text>
        </a>
      </>
    }
  </Div>
);

AnnounceSection.defaultProps = {
  linkCaption: "Plus d'informations"
}

export default AnnounceSection;
