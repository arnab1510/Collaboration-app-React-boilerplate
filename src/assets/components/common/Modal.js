import React from 'react';
import { Modal } from 'antd';

function CustomModal(props) {
    
  const { width, title, children, visible, setVisible } = props;

  const handleOk = (ev) => {
    ev.stopPropagation();
    setVisible(false);
  };

  const handleCancel = (ev) => {
    ev.stopPropagation();
      setVisible(false);
  };
    
  return (
    <Modal width={width ? width : null} {...props} title={title ? title : ''} visible={visible} onOk={handleOk} onCancel={handleCancel} footer={null}>
      {children}
    </Modal>
  );
}

export default CustomModal;
