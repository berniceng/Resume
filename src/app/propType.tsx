import React from 'react';

export interface InitialProps {
  history: any;
  token: string;
  setToken: Function;
}

export interface InitialState {
  token: string;
}

export interface MainState {
  test1: number;
}

export interface LoginState {
  error: string;
}

export interface RouteState {
  isValid: boolean;
}
