import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <div className="relative overflow-hidden">
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames="slide"
          timeout={500}
        >
          {children}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default PageTransition;
