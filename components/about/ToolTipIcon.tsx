import React from 'react';
import { IconType } from 'react-icons/lib';

type ToolTipIconProps = {
  item: {
    name: string;
    icon: IconType;
  };
};

const ToolTipIcon = (props: ToolTipIconProps) => {
  return (
    <div className="group relative flex flex-col items-center">
      <props.item.icon className="h-10 w-10" />
      <div className="absolute bottom-4 mb-6 hidden flex-col items-center group-hover:flex">
        <span className="relative z-10 rounded-sm bg-black p-2 text-xs leading-none text-white shadow-lg dark:bg-white dark:text-black">
          {props.item.name}
        </span>
        <div className="-mt-2 h-3 w-3 rotate-45 bg-black dark:bg-white"></div>
      </div>
    </div>
  );
};

export default ToolTipIcon;
