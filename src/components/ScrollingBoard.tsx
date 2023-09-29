import clsx from 'clsx';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ISliderContext {
  width?: string;
  height?: string;
}

const SliderContext = createContext<ISliderContext>({});

export interface IScrollingBoardItemProps {
  children: React.ReactNode;
}

export const ScrollingBoardItem: React.FC<IScrollingBoardItemProps> = ({
  children,
}) => {
  const sliderContext = useContext(SliderContext);
  return (
    <div
      className={clsx(
        'flex-shrink-0',
        sliderContext.width,
        sliderContext.height,
        'p-2'
      )}
    >
      {children}
    </div>
  );
};

export interface IScrollingBoard {
  children: React.ReactNode[];
  className?: {
    height?: string;
    gap?: string;
    width?: string;
    itemWidth?: string;
  };
}

export const ScrollingBoard: React.FC<IScrollingBoard> = ({
  children,
  className = {},
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState<number>(0);
  className = {
    ...{
      height: 'h-40',
      gap: 'gap-2',
      width: 'w-full',
      itemWidth: 'w-40',
    },
    ...className,
  };

  useEffect(() => {
    //console.log(trackRef.current?.getBoundingClientRect());
    if(trackRef.current){
      setTrackWidth(trackRef.current.scrollWidth);
    }
  }, [trackRef]);

  return (
    <SliderContext.Provider
      value={{
        height: className.height,
        width: className.itemWidth,
      }}
    >
      <div
        className={clsx(className.width, className.height, 'overflow-hidden')}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: (-1 * (trackWidth/2)),
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          <div id='slider-track' ref={trackRef} className={clsx('flex', className.height)}>
            {[...children, ...children]}
          </div>
        </motion.div>
      </div>
    </SliderContext.Provider>
  );
};
