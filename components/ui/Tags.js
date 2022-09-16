import React from 'react';
import { Chip, P } from "../text";

const Tags = ({ tags, tag, setTag }) => {
  if (Object.entries(tags).length === 0) return null;
  return (
    <P align="right" fontSize="13px" m="0px">
      Filtrer par:
      {Object.entries(tags).map(([key, label]) => (
        <Chip key={key} onClick={() => setTag(key)} selected={tag === key}>{label}</Chip>
      ))}
    </P>
  );
}

export default Tags;
