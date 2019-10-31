import React from 'react';
import { Div } from '../layout';
import { Text } from '../text';

const AnnounceSection = () => (
  <Div bg="lightOrange" p="25px" align="center">
    <Text fontSize={{ xs: '1.3em', sm: '1.5em' }} m="0 0 10px">
      Prochaine journée de Constellations Familiales le 8 décembre à Paris
    </Text>
    <br />
    <a href="https://www.facebook.com/events/475880413137212/" target="_blank" style={{ textDecoration: 'none' }}>
      <Text italic color="black">
        Plus d'informations ici
      </Text>
    </a>
  </Div>
);

export default AnnounceSection;
