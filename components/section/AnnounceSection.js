import React from 'react';
import { Div } from '../layout';
import { Text } from '../text';

const AnnounceSection = ({ dmoka }) => (
  <Div bg="lightOrange" p="25px" align="center">
    <Text fontSize={{ xs: '1.3em', sm: '1.5em' }} m="0 0 10px">
      Possibilité de sessions {dmoka ? 'de D.M.O.K.A.' : ''} en ligne sur Skype !
    </Text>
    <br />
    <a href="https://www.facebook.com/story.php?story_fbid=232759478113047&id=104513137604349" target="_blank" style={{ textDecoration: 'none' }}>
      <Text italic color="black">
        Plus d'informations ici
      </Text>
    </a>
  </Div>
);

export default AnnounceSection;
