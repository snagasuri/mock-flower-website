import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <div className="relative overflow-hidden min-h-screen">
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="slide"
          timeout={500}
        >
          <div className="absolute w-full min-h-screen">
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default PageTransition;
