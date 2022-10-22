import { Image } from "antd";
import cx from "classnames";
import React, { useRef, useState } from "react";
import styles from "./../../../scss/design.module.scss";

function ImageComponent(props) {

  const { data } = props;

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
        <Image.PreviewGroup>
          {data.images.map((item, index) => {
            return (
              index < 4 ? <Image src={data.images[index]}/> : null
            )
          })}
        </Image.PreviewGroup>
      </div>
    )
  };

  const renderImage = () => {
    if (data.images.length===1) {
      console.log('kjbhhj')
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
