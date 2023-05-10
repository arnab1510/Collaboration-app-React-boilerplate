import { Input } from 'antd';
import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { BsDownload, BsEmojiHeartEyes, BsEraser, BsImage, BsPencil, BsArrow90DegRight } from 'react-icons/bs';
import { CgRedo, CgUndo } from 'react-icons/cg';
import { FiShare, FiTrash2 } from 'react-icons/fi';
import { HiCursorClick, HiOutlineSearch } from 'react-icons/hi';
import { IoHandRightOutline, IoShapesOutline, IoTextOutline } from 'react-icons/io5';
import { MdHorizontalRule } from 'react-icons/md';
import { RiAppsLine, RiSubtractFill, RiAddLine } from 'react-icons/ri';
import { Arrow, Layer, Line, Rect, Stage, Transformer } from 'react-konva';
import TooltipCustom from '../assets/components/common/Tooltip';
import styles from '../assets/scss/design.module.scss';

function Home() {

  const [tool, setTool] = React.useState('pen');
  const [lines, setLines] = React.useState([]);
  const [selectedId, selectShape] = React.useState(null);
  const [rectangles, setRect] = React.useState([]);
  // const [drawLine, setDrawLine] = React.useState(false);
  const isDrawing = React.useRef(false);
  const stageRef = React.useRef(null);
  const shapeRef = React.useRef();
  const layerRef = React.useRef(null);
  const [cursor, setCursor] = useState('crosshair');
  const [stage, setStage] = useState({
    scale: 1,
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (tool==="select" || tool==="pan") {
      setCursor('pointer');
    }
    else if (tool!=="select") {
      setCursor('crosshair');
    }
  }, [tool]);

  const handleMouseDown = (e) => {
    checkDeselect(e);
    if (tool==="pen") {
      isDrawing.current = true;
      setLines([...lines, { tool, points: [getAbsoluteTransform(stageRef).x, getAbsoluteTransform(stageRef).y] }]);
    }
    else if (tool==="shape") {
      isDrawing.current = true;
      let newRect = null;
      newRect = {x: getAbsoluteTransform(stageRef).x, y: getAbsoluteTransform(stageRef).y, width: 0, height: 0, fill: '#e6edff', stroke: '#b8ccff', strokeWidth: 1, id: 'rect'+rectangles.length};
      setRect(rectangles => [...rectangles, newRect]);
    }
  };

  const scaleRelativeToPoint = (point, increaseScale) => {
    const scaleBy = 1.02;
    const stage = stageRef.current;
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: point.x / oldScale - stage.x() / oldScale,
      y: point.y / oldScale - stage.y() / oldScale
    };

    const newScale = increaseScale ? oldScale * scaleBy : oldScale / scaleBy;

    setStage({
      scale: newScale,
      x: (point.x / newScale - mousePointTo.x) * newScale,
      y: (point.y / newScale - mousePointTo.y) * newScale
    });
  };

  const getPointerPosition = () => {
    return stageRef.current.getPointerPosition();
  }

  const getAbsoluteTransform = (element) => {
    let transform = element.current.getAbsoluteTransform().copy();
    transform.invert();
    return transform.point(getPointerPosition());
  }

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }
    else if (tool==="pen" || tool==="eraser") {
      let lastLine = lines[lines.length - 1];
      lastLine.points = lastLine.points.concat([getAbsoluteTransform(stageRef).x, getAbsoluteTransform(stageRef).y]);

      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }
    else if (tool==="shape" || tool==="eraser") {
      const rectCopy = [...rectangles];
      const index = rectangles.length - 1;
      rectCopy[index].width = getAbsoluteTransform(stageRef).x - rectCopy[index].x;
      rectCopy[index].height = getAbsoluteTransform(stageRef).y - rectCopy[index].y;
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
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  const CustomArrow = ({ startNode, endNode }) => {
    const dx = startNode.x - endNode.x;
    const dy = startNode.y - endNode.y;
    let angle = Math.atan2(-dy, dx);

    const radius = 20;
    const curvePower = 30;

    const arrowStart = {
      x: endNode.x + -radius * Math.cos(angle + Math.PI),
      y: endNode.y + radius * Math.sin(angle + Math.PI)
    };
  
    const arrowEnd = {
      x: startNode.x + -radius * Math.cos(angle),
      y: startNode.y + radius * Math.sin(angle)
    };

    const arrowCurve = {
      x:
        (arrowStart.x + arrowEnd.x) / 2 +
        curvePower * Math.cos(angle + Math.PI / 2),
      y:
        (arrowStart.y + arrowEnd.y) / 2 +
        curvePower * Math.sin(angle - Math.PI / 2)
    };

    return (
      <React.Fragment>
        <Arrow
          tension={0.2}
          points={[
            arrowStart.x,
            arrowStart.y,
            arrowCurve.x,
            arrowCurve.y,
            arrowEnd.x,
            arrowEnd.y
          ]}
          stroke="#000"
          fill="#000"
          strokeWidth={3}
          pointerWidth={6}
        />
      </React.Fragment>
    )
  };

  const rectMouseDown = (e) => {
    console.log(e)
  }

  const shapeHover = () => {

  }

  const Rectangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
    const trRef = React.useRef();
  
    React.useEffect(() => {
      if (isSelected) {
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
          draggable={tool!=="pan"}
          fill={shapeProps.fill}
          stroke={shapeProps.stroke}
          strokeWidth={shapeProps.strokeWidth}
          shadowBlur={0}
          shadowEnabled={false}
          onMouseEnter={shapeHover}
          onMouseDown={(e) => rectMouseDown(e)}
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
              rotation: node.rotation()
            });
          }}
        />
        {isSelected && (
          <Transformer
            ref={trRef}
            keepRatio={false}
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
                  <TooltipCustom title="Download PNG">
                      <span className={styles.headerActionIcon}><BsDownload/></span>
                  </TooltipCustom>
                  <TooltipCustom title="Share document">
                      <span className={styles.headerActionIcon}><FiShare/></span>
                  </TooltipCustom>
                  <TooltipCustom title="Search Vault">
                      <span className={styles.headerActionIcon}><HiOutlineSearch/></span>
                  </TooltipCustom>
                </div>
            </div>
          </div>
          <div className={styles.buildWrapper} style={{ cursor: cursor }}>
            <div className={styles.designToolbar}>
              {iconOption(<HiCursorClick/>, 'select', 'toolSelect')}
              {iconOption(<MdHorizontalRule/>, 'line', 'toolSelect')}
              {iconOption(<BsPencil/>, 'pen', 'toolSelect')}
              {iconOption(<BsEraser/>, 'eraser', 'toolSelect')}
              {iconOption(<IoShapesOutline/>, 'shape', 'toolSelect')}
              {iconOption(<IoTextOutline/>, 'text', 'toolSelect')}
              {iconOption(<BsArrow90DegRight/>, 'arrow', 'toolSelect')}
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
            <div className={styles.zoomToolbar}>
              <div className={styles.toolIcon} onClick={() => {scaleRelativeToPoint({x: window.innerWidth / 2,y: window.innerHeight / 2},false)}}><RiSubtractFill/></div>
              <div className={cx(styles.toolIcon, styles.zoomInput)}>{Math.round(stage.scale*100)}%</div>
              <div className={styles.toolIcon} onClick={() => {scaleRelativeToPoint({x: window.innerWidth / 2,y: window.innerHeight / 2},true)}}><RiAddLine/></div>
              <div className={styles.toolIcon} onClick={(() => toolBarAction("pan", "toolSelect"))}><IoHandRightOutline/></div>
            </div>
            <Stage
              width={window.innerWidth}
              height={window.innerHeight}
              // x={stage.x}
              // y={stage.y}
              draggable={tool==="pan"}
              ref={stageRef}
              scaleX={stage.scale}
              scaleY={stage.scale}
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
                {/* <CustomArrow startNode={'rect1'} endNode={'rect2'} /> */}
                {rectangles.map((rectangle, index) => (
                  <Rectangle
                    key={index}
                    id={'rect'+index}
                    getKey={index}
                    shapeProps={rectangle}
                    height={rectangle.height}
                    width={rectangle.width}
                    isSelected={rectangle.id === selectedId}
                    onSelect={() => {
                      selectShape(rectangle.id);
                    }}
                    onChange={(newAttrs) => {
                      const rects = rectangles.slice();
                      rects[index] = newAttrs;
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