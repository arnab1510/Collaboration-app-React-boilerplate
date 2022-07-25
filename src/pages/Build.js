import { Input } from 'antd';
import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { BsDownload, BsEmojiHeartEyes, BsEraser, BsImage, BsPencil } from 'react-icons/bs';
import { CgRedo, CgUndo } from 'react-icons/cg';
import { FiShare, FiTrash2 } from 'react-icons/fi';
import { HiCursorClick, HiOutlineSearch } from 'react-icons/hi';
import { IoShapesOutline, IoTextOutline } from 'react-icons/io5';
import { MdHorizontalRule } from 'react-icons/md';
import { RiAppsLine } from 'react-icons/ri';
import { Layer, Line, Rect, Stage, Transformer } from 'react-konva';
import TooltiipPJ from '../assets/components/common/Tooltip';
import styles from '../assets/scss/design.module.scss';

function Home() {

  const [tool, setTool] = React.useState('pen');
  const [lines, setLines] = React.useState([]);
  const [selectedId, selectShape] = React.useState(null);
  const [rectangles, setRect] = React.useState([]);
  const isDrawing = React.useRef(false);
  const stageRef = React.useRef(null);
  const layerRef = React.useRef(null);
  const [cursor, setCursor] = useState('crosshair');

  useEffect(() => {
    if (tool==="select") {
      setCursor('pointer');
    }
    else if (tool!=="select") {
      setCursor('crosshair');
    }
  }, [tool]);

  const handleMouseDown = (e) => {
    checkDeselect(e);
    if (tool!=="select") {
      isDrawing.current = true;
      const pos = e.target.getStage().getPointerPosition();
      setLines([...lines, { tool, points: [pos.x, pos.y] }]);
      if (tool==="shape") {
        let newRect = null;
        newRect = {x: pos.x, y: pos.y, width: 0, height: 0, fill: '#e6edff', stroke: '#b8ccff', strokeWidth: 1};
        setRect(rectangles => [...rectangles, newRect]);
      }
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
          perfectDrawEnabled={false}
          ref={shapeRef}
          {...shapeProps}
          draggable
          fill={shapeProps.fill}
          stroke={shapeProps.stroke}
          strokeWidth={shapeProps.strokeWidth}
          // cornerRadius={4}
          shadowBlur={0}
          // shadowOffset={0}
          shadowEnabled={false}
          // shadowColor={0}
          onDragEnd={(e) => {
            onChange({
              ...shapeProps,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
          onTransformEnd={(e) => {
            const node = shapeRef.current;
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();
            node.scaleX(1);
            node.scaleY(1);
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(node.height() * scaleY),
            });
          }}
        />
        {isSelected && (
          <Transformer
            ref={trRef}
            boundBoxFunc={(oldBox, newBox) => {
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
                  <TooltiipPJ title="Download PNG">
                      <span className={styles.headerActionIcon}><BsDownload/></span>
                  </TooltiipPJ>
                  <TooltiipPJ title="Share document">
                      <span className={styles.headerActionIcon}><FiShare/></span>
                  </TooltiipPJ>
                  <TooltiipPJ title="Search Vault">
                      <span className={styles.headerActionIcon}><HiOutlineSearch/></span>
                  </TooltiipPJ>
                </div>
            </div>
          </div>
          <div className={styles.excalidrawWrapper} style={{ cursor: cursor }}>
            <div className={styles.designToolbar}>
              {iconOption(<HiCursorClick/>, 'select', 'toolSelect')}
              {iconOption(<MdHorizontalRule/>, 'line', 'toolSelect')}
              {iconOption(<BsPencil/>, 'pen', 'toolSelect')}
              {iconOption(<BsEraser/>, 'eraser', 'toolSelect')}
              {iconOption(<IoShapesOutline/>, 'shape', 'toolSelect')}
              {iconOption(<IoTextOutline/>, 'shape', 'toolSelect')}
              {iconOption(<RiAppsLine/>, 'clear', 'clear')}
              {iconOption(<BsImage/>, 'clear', 'clear')}
              {iconOption(<BsEmojiHeartEyes/>, 'clear', 'clear')}
              |
              {iconOption(<FiTrash2/>, 'clear', 'clear')}
              {iconOption(<CgUndo/>, 'clear', 'clear')}
              {iconOption(<CgRedo/>, 'clear', 'clear')}
            </div>
            <div className={styles.designOptions}>
              <div>
                <div className={styles.optionHeader}>Position &amp; dimensions</div>
                <div className={styles.twoGrid}>
                  <div>X 348</div>
                  <div>Y 110</div>
                  <div>W 348</div>
                  <div>H 348</div>
                </div>
              </div>
            </div>
            <Stage
              width={window.innerWidth}
              height={window.innerHeight}
              ref={stageRef}
              onMouseDown={handleMouseDown}
              onMousemove={handleMouseMove}
              onMouseup={handleMouseUp}>
              <Layer ref={layerRef}>
                {lines.map((line, i) => (
                  <Line
                    key={i}
                    points={line.points}
                    stroke="#010101"
                    strokeWidth={1}
                    perfectDrawEnabled={false}
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
                    isSelected={rectangle.id === selectedId}
                    onSelect={() => {
                      selectShape(rectangle.id);
                      console.log(selectedId);
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