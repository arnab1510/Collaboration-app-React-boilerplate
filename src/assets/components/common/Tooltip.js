import React from 'react';
import { Tooltip } from 'antd';

function TooltipCustom(props) {
    
  const { title, children, type } = props;

  const typeColor = (type) => {
      if (type==='primary') {
          return '#823cff';
      }
  };

  return (
    <Tooltip {...props} title={title ? title : ''} color={type ? typeColor() : "#424242"}>
      {children}
    </Tooltip>
  );
}

export default TooltipCustom;
