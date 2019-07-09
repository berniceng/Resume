import React from 'react';

export interface InitialProps {
  history: any;
  token: string;
  setToken: Function;
}

export interface MainState {
  test1: number;
}

export interface LoginState {
  error: string;
}

export interface InputProps {
  label: string;
  type: string;
  inputRef: React.RefObject<HTMLInputElement>;
}
