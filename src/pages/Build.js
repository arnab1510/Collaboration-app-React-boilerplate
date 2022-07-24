import React, {  useState, useEffect, useRef, memo } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import cx from 'classnames';
import styles from '../assets/scss/design.module.scss';
import { Input } from 'antd';
import TooltiipPJ from '../assets/components/common/Tooltip';
import { FiShare, FiTrash2 } from 'react-icons/fi';
import { IoShapesOutline } from 'react-icons/io5';
import { MdHorizontalRule } from 'react-icons/md';
import { BsEraser, BsPencil } from 'react-icons/bs';
import { HiCursorClick, HiOutlineSearch } from 'react-icons/hi';
import { Stage, Layer, Line, Text, Transformer, Rect } from 'react-konva';

function Home() {

  const [tool, setTool] = React.useState('pen');
  const [lines, setLines] = React.useState([]);
  const [selectedId, selectShape] = React.useState(null);
  const [rectangles, setRect] = React.useState([]);
  const isDrawing = React.useRef(false);
  const stageRef = React.useRef(null);
  const layerRef = React.useRef(null);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
    if (tool==="shape") {
      let newRect = null;
      newRect = {x: pos.x, y: pos.y, width: 0, height: 0, fill: 'green', stroke: 'black', strokeWidth: 4};
      setRect(rectangles => [...rectangles, newRect]);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    if (tool==="pen" || tool==="eraser") {
      let lastLine = lines[lines.length - 1];
      // add point
      lastLine.points = lastLine.points.concat([point.x, point.y]);
  
      // replace last
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }
    else if (tool==="shape" || tool==="eraser") {
      const rectCopy = [...rectangles];
      const index = rectangles.length - 1;
      rectCopy[index].width = point.x - rectCopy[index].x;
      rectCopy[index].height = point.y - rectCopy[index].y;
      setRect(rectCopy);
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const toolBarAction = (toolName,type) => {
    if (type==="toolSelect") {
      setTool(toolName);
    }
    else if (type==="clear") {
      layerRef.current.destroyChildren();
      setLines([]);
      setRect([]);
    }
  };

  const iconOption = (icon, toolName, type) => {
    return (
      <div onClick={(() => toolBarAction(toolName,type))} className={cx(styles.toolIcon, tool===toolName?styles.activeTool:null)}>{icon}</div>
    )
  };

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  const Rectangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
    const shapeRef = React.useRef();
    const trRef = React.useRef();
  
    React.useEffect(() => {
      if (isSelected) {
        // we need to attach transformer manually
        trRef.current.nodes([shapeRef.current]);
        trRef.current.getLayer().batchDraw();
      }
    }, [isSelected]);
  
    return (
      <React.Fragment>
        <Rect
          onClick={onSelect}
          onTap={onSelect}
          ref={shapeRef}
          {...shapeProps}
          draggable
          onDragEnd={(e) => {
            onChange({
              ...shapeProps,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
          onTransformEnd={(e) => {
            // transformer is changing scale of the node
            // and NOT its width or height
            // but in the store we have only width and height
            // to match the data better we will reset scale on transform end
            const node = shapeRef.current;
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();
  
            // we will reset it back
            node.scaleX(1);
            node.scaleY(1);
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
              // set minimal value
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(node.height() * scaleY),
            });
          }}
        />
        {isSelected && (
          <Transformer
            ref={trRef}
            boundBoxFunc={(oldBox, newBox) => {
              // limit resize
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox;
              }
              return newBox;
            }}
          />
        )}
      </React.Fragment>
    );
  };
            
    return (
        <div style={{overflow: 'hidden'}}>
          <div className={styles.docHeader}>
            <div className={cx(styles.flexRightHeader)}>
                <Input placeholder="New document" bordered={false} />
                <div className={styles.section_right}>
                <TooltiipPJ title="Share document">
                    <span className={styles.headerActionIcon}><FiShare/></span>
                </TooltiipPJ>
                <TooltiipPJ title="Search Vault">
                    <span className={styles.headerActionIcon}><HiOutlineSearch/></span>
                </TooltiipPJ>
                </div>
            </div>
          </div>
          <div className={styles.excalidrawWrapper}>
            <div className={styles.designToolbar}>
              {iconOption(<HiCursorClick/>, 'select', 'toolSelect')}
              {iconOption(<MdHorizontalRule/>, 'line', 'toolSelect')}
              {iconOption(<BsPencil/>, 'pen', 'toolSelect')}
              {iconOption(<BsEraser/>, 'eraser', 'toolSelect')}
              {iconOption(<IoShapesOutline/>, 'shape', 'toolSelect')}
              {iconOption(<FiTrash2/>, 'clear', 'clear')}
            </div>
            <Stage
              width={window.innerWidth}
              height={window.innerHeight}
              onMouseDown={handleMouseDown}
              onMousemove={handleMouseMove}
              onMouseup={handleMouseUp}
              ref={stageRef}>
              <Layer ref={layerRef}>
                {lines.map((line, i) => (
                  <Line
                    key={i}
                    points={line.points}
                    stroke="#df4b26"
                    strokeWidth={2}
                    tension={0.5}
                    lineCap="round"
                    lineJoin="round"
                    globalCompositeOperation={
                      line.tool === 'eraser' ? 'destination-out' : 'source-over'
                    }
                  />
                ))}
                {rectangles.map((rectangle, i) => (
                  <Rectangle
                    key={i}
                    shapeProps={rectangle}
                    height={rectangle.height}
                    width={rectangle.width}
                    stroke="#df4b26"
                    strokeWidth={2}
                    isSelected={rectangle.id === selectedId}
              onSelect={() => {
                selectShape(rectangle.id);
              }}
              onChange={(newAttrs) => {
                const rects = rectangles.slice();
                rects[i] = newAttrs;
                setRect(rects);
              }}
                  />
                ))}
              </Layer>
            </Stage>
          </div>
        </div>
    )
}

export default Home;