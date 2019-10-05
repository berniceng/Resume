/*  NOT IN USED

import React, { createContext } from 'react';
import { MENU } from './data/constants';

export const Context = createContext({});

const menuObj = [
  MENU.ABOUTME,
  MENU.EDU,
  MENU.EXP,
  MENU.SKILL,
  MENU.RECOMMENDATION,
];

export const AppContext = (Component: any): any => {
  return (props: object) => {
    return(
      <Context.Consumer>
        {(appProps: object) => <Component {...appProps} menuObj={menuObj} />}
      </Context.Consumer>
    );
  };
};
*/
