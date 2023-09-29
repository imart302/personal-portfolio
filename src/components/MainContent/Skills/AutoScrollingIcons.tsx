import React from 'react'
import { ScrollingBoard, ScrollingBoardItem } from '../../ScrollingBoard'

export const AutoScrollingIcons: React.FC = () => {
  return (
    <div className="p-7">
    <ScrollingBoard
      className={{
        width: 'w-full',
        height: 'h-[100px]',
        itemWidth: 'w-[100px]',
      }}
    >
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
      </ScrollingBoardItem>
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
      </ScrollingBoardItem>
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      </ScrollingBoardItem>
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      </ScrollingBoardItem>
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
      </ScrollingBoardItem>
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
      </ScrollingBoardItem>
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
      </ScrollingBoardItem>
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
      </ScrollingBoardItem>
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
      </ScrollingBoardItem>
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
      </ScrollingBoardItem>
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
      </ScrollingBoardItem>
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg" />
      </ScrollingBoardItem>
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
      </ScrollingBoardItem>
      <ScrollingBoardItem>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
      </ScrollingBoardItem>
    </ScrollingBoard>
  </div>
  )
}
