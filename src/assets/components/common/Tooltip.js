import React from 'react';
import { Tooltip } from 'antd';

function TooltiipPJ(props) {
    
  const { title, children, type } = props;

  const typeColor = (type) => {
      if (type==='primary') {
          return '#823cff';
      }
  };

  return (
    <Tooltip {...props} title={title ? title : ''} color={type ? typeColor() : "#614aff"}>
      {children}
    </Tooltip>
  );
}

export default TooltiipPJ;
