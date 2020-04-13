import React from 'react';
import { BgImage } from 'components/media';

const ImageSection = ({ image, position }) => (
  <BgImage src={`/static/images/${image}`} h={{ xs: '250px', md: '400px' }} align="middle" position={position}/>
);

export default ImageSection;
