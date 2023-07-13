import React from 'react';
import { Div, Span } from '../layout';
import { Text } from '../text';
import { styled } from "../../utils/styling";

const VerticalAlignContainer = styled.span`
  display: flex; 
  align-items: center; 
`;

const BookingSection = () => (
  <Div bg="warning" p="25px" align="center">
    <a href="https://perfactive.fr/psychologue/compiegne/anna-elisa-valmori" target="_blank" style={{ textDecoration: 'none' }}>
      <Text color="black" fontSize={{ xs: '1.3em', sm: '1.5em' }} m="0 0 10px">
        <VerticalAlignContainer>Réservez votre séance sur cette page</VerticalAlignContainer>
      </Text>
      <br />
      <Text italic color="black">
        Plus d'informations
      </Text>
    </a>
  </Div>
);

export default BookingSection;
