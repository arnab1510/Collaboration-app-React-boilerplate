import { Drawer } from 'antd';
import React from 'react';

function CustomDrawer(props) {
    
  const { width, title, children, visible, onClose, close } = props;

  const handleClose = (ev) => {
    ev.stopPropagation();
    onClose(false);
  };
    
  return (
    <Drawer closable={close?false:true} width={width ? width : '50vw'} {...props} title={title ? title : ''} visible={visible} onClose={handleClose} footer={null}>
      {children}
    </Drawer>
  );
}

export default CustomDrawer;
