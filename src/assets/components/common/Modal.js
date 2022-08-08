import React from 'react';
import { Modal } from 'antd';

function CustomModal(props) {
    
  const { width, top, title, children, visible, setVisible, hideClose } = props;

  const handleOk = (ev) => {
    ev.stopPropagation();
    setVisible(false);
  };

  const handleCancel = (ev) => {
    ev.stopPropagation();
      setVisible(false);
  };
    
  return (
    <Modal closeIcon={hideClose?hideClose:null} style={top?{top: top+'px'}:null} width={width ? width : null} {...props} title={title ? title : ''} visible={visible} onOk={handleOk} onCancel={handleCancel} footer={null}>
      {children}
    </Modal>
  );
}

export default CustomModal;
