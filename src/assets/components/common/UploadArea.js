import React from 'react';
import styles from '../../../assets/scss/design.module.scss';
import { message, Upload } from 'antd';
import { AiOutlineInbox } from 'react-icons/ai';

function UploadArea(props) {

  const { Dragger } = Upload;
  const config = {
    name: 'file',
    multiple: true,
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  
    onChange(info) {
      const { status } = info.file;
  
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
  
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <div className={styles.fileInput}>
      <Dragger {...config}>
        <p className="ant-upload-drag-icon">
          <AiOutlineInbox/>
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Attach files/screenshots which will help the team understand more about the request.
        </p>
      </Dragger>
    </div>
  );
}

export default UploadArea;
