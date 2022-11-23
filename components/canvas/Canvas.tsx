import { useRef, useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import CanvasControl from './CanvasControl';

const Canvas = () => {
  const [color, setColor] = useState('rgba(255, 0, 0, 0.5)');
  const canvasRef = useRef(null);
  const clearHandler = () => {
    // @ts-ignore

    // @ts-ignore
    canvasRef.current?.clearCanvas();
  };
  return (
    <>
      <ReactSketchCanvas
        ref={canvasRef}
        style={{
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 5,
        }}
        backgroundImage={'transparent'}
        width="100%"
        height="100vh"
        strokeWidth={5}
        strokeColor={color}
      />
      <CanvasControl
        color={color}
        setColor={setColor}
        clearCanvas={clearHandler}
      />
    </>
  );
};

export default Canvas;
