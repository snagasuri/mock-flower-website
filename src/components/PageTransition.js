import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="slide"
        timeout={500}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;
