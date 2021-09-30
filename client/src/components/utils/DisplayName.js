import React from 'react';
import { tags, informations } from '../../utils/utils.functions';

const DisplayName = ({tagStyles, componentStyle}) => {
  return (
    <div style={componentStyle}>
      <span style={tagStyles}>{tags.closingTagName}</span>
      {informations.name}
    </div>
  );
};

export default DisplayName;
