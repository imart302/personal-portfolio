import React, { RefObject, useState } from 'react';

interface IScrollNavSection {
  name: string;
  refObj: RefObject<HTMLElement>;
}

export interface IScrollNavContext {
  sections: IScrollNavSection[];
  actual?: string;
  pushSection: (section: IScrollNavSection) => void;
  navigate: (section: string) => void;
}

export const ScrollNavContext = React.createContext<IScrollNavContext>({
  sections: [],
  pushSection: () => {
    ''
  },
  navigate: () => {
    ''
  },
});

export const ScrollNavContextProvider: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const [sections, setSections] = useState<IScrollNavSection[]>([]);

  const pushSection = (s: IScrollNavSection) => {
    //console.log('🚀 ~ file: NavContext.tsx:26 ~ pushSection ~ s:', s);
    if (! sections.find((i) => i.name === s.name)) {
      setSections((prev) => {
        return [...prev, s];
      });
    }
  };

  const navigate = (section: string) => {
    //console.log('🚀 ~ file: NavContext.tsx:34 ~ navigate ~ section:', section);
    const s = sections.find((a) => a.name === section);
    //console.log("🚀 ~ file: NavContext.tsx:44 ~ navigate ~ s:", s)
    
    if (s && s.refObj.current) {
      s.refObj.current?.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <ScrollNavContext.Provider
      value={{ sections, pushSection, navigate }}
    >
      {children}
    </ScrollNavContext.Provider>
  );
};
