import { Image } from "antd";
import React, { useState } from "react";

function ImageComponent(props) {

  const { data } = props;
  const [visible, setVisible] = useState(false);

  const singleImage = () => {
    return (
      <Image src={data.images[0]}/>
    )
  };

  const twoImages = () => {
    return (
      <div className={'twoImages'}>
        <Image.PreviewGroup>
          {data.images.map((item, index) => {
            return (
              <Image src={data.images[index]}/>
            )
          })}
        </Image.PreviewGroup>
      </div>
    )
  };

  const threeImages = () => {
    return (
      <div className={'threeImages'}>
        <Image.PreviewGroup>
          {data.images.map((item, index) => {
            return (
              <Image src={data.images[index]}/>
            )
          })}
        </Image.PreviewGroup>
      </div>
    )
  };

  const fourImages = () => {
    return (
      <div className={'fourImages'}>
        <Image.PreviewGroup>
          {data.images.map((item, index) => {
            return (
              <Image src={data.images[index]}/>
            )
          })}
        </Image.PreviewGroup>
      </div>
    )
  };

  const fiveImages = () => {
    return (
      <div className={'fourImages'}>
        <Image.PreviewGroup preview={{
          visible,
          current: 3,
          onVisibleChange: value => {
            setVisible(value);
        }}}>
          <Image src={data.images[0]}/>
          <Image src={data.images[1]}/>
          <Image src={data.images[2]}/>
          <div className={"overlayImg"} onClick={() => setVisible(true)}>
            <span className={"imageLength"} onClick={() => setVisible(true)}>+ {data.images.length-3}</span>
            <Image src={data.images[3]}/>
          </div>
          {data.images.map((item, index) => {
            return (
              index > 3 ? <Image style={{display: 'none'}} src={data.images[index]}/> : null
            )
          })}
        </Image.PreviewGroup>
      </div>
    )
  };

  const renderImage = () => {
    if (data.images.length===1) {
      return (singleImage())
    }
    else if (data.images.length===2) {
      return (twoImages())
    }
    else if (data.images.length===3) {
      return (threeImages())
    }
    else if (data.images.length===4) {
      return (fourImages())
    }
    else if (data.images.length>=5) {
      return (fiveImages())
    }
  };

  return (
    <div className={'postImg'}>
      {renderImage()}
    </div>
  );
}

export default ImageComponent;
