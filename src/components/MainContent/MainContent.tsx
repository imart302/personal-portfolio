import clsx from 'clsx';
import { useContext, useEffect, useRef } from 'react';
import { ScrollNavContext } from '../../context/NavContext';
import { CandyBackground } from './CandyBackground';
import { AboutMe } from './AboutMe/AboutMe';
import { Experience } from './Experience/Experience';
import { Skills } from './Skills/Skills';
import { Portfolio } from './Portfolio/Portfolio';


export const MainContent = () => {
  const scrollNavContext = useContext(ScrollNavContext);
  const aboutMeRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null); 

  useEffect(() => {
    if(aboutMeRef && aboutMeRef.current) {
      scrollNavContext.pushSection?.({
        name: aboutMeRef.current?.id,
        refObj: aboutMeRef,
      })
    }

    if(portfolioRef && portfolioRef.current) {
      scrollNavContext.pushSection?.({
        name: portfolioRef.current?.id,
        refObj: portfolioRef,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aboutMeRef, portfolioRef]);  

  return (
      <div
        id="Content"
        className={clsx(
          'mt-[54px]',
          'md:mt-0',
          'relative',
          'overflow-x-hidden'
        )}
      >
        <CandyBackground />

        <div className={clsx('relative', 'z-20')}>
          <section ref={aboutMeRef} id="aboutme">
            <AboutMe />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section ref={portfolioRef} id="portfolio">
            <Portfolio />
          </section>
        </div>
      </div>
  );
};
