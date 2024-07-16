import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup className="relative overflow-hidden h-screen">
      <CSSTransition
        key={location.pathname}
        classNames="slide"
        timeout={500}
      >
        <div className="absolute w-full h-full">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;
