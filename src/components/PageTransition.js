import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;
