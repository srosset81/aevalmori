import React from 'react';
import { Chip, P } from "../text";

const Tags = ({ tags, tag, setTag }) => (
  <P align="right" fontSize="13px" m="0px">
    Filtrer par:
    {Object.entries(tags).map(([key, label]) => (
      <Chip onClick={() => setTag(key)} selected={tag === key}>{label}</Chip>
    ))}
  </P>
);

export default Tags;
