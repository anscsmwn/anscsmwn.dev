/* eslint-disable no-unused-vars */
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';
interface ControlProps {
  clearCanvas: () => void;
  color: string;
  setColor: (color: string) => void;
}
const colorList = [
  'rgba(255, 0, 0, 0.5)',
  'rgba(213,248,160,255)',
  'rgba(0, 0, 255, 0.5)',
];
const CanvasControl = ({ clearCanvas, color, setColor }: ControlProps) => {
  return (
    <div className="fixed top-[20%] right-1 z-50 rounded-full bg-gray-100 p-2 dark:bg-light md:top-[35%]">
      <div className="flex flex-col space-y-2">
        {colorList.map((data, key) => (
          <button
            onClick={() => setColor(data)}
            className="h-8 w-8 rounded-full"
            key={key}
            style={{ backgroundColor: data }}
            aria-label="Change brush color"
          >
            {data === color && <FaCheckCircle className="mx-auto" />}
          </button>
        ))}
        <button
          onClick={() => {
            clearCanvas();
          }}
          className="h-8 w-8 rounded-full bg-gray-200 dark:bg-dark"
          aria-label="Clear doodle"
        >
          <FaTrashAlt className="mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default CanvasControl;
