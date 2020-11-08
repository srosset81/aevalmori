import React from 'react';
import { Div, Span } from '../layout';
import { Text } from '../text';
import { Image } from "../media";
import { styled } from "../../utils/styling";

const VerticalAlignContainer = styled.span`
  display: flex; 
  align-items: center; 
`;

const DoctolibSection = () => (
  <Div bg="lightOrange" p="25px" align="center">
    <a href="https://www.doctolib.fr/psychologue/compiegne/anna-elisa-valmori" target="_blank" style={{ textDecoration: 'none' }}>
    <Text color="black" fontSize={{ xs: '1.3em', sm: '1.5em' }} m="0 0 10px">
      <VerticalAlignContainer>Réservez votre séance en ligne sur<Span w="7px" /><Image src={`/static/images/doctolib-black.png`} w="85px" /></VerticalAlignContainer>
    </Text>
    <br />
    <Text italic color="black">
        Plus d'informations ici
      </Text>
    </a>
  </Div>
);

export default DoctolibSection;
