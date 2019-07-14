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
  currentPage: String;
  headerClass: string;
}

export interface LoginState {
  error: string;
}

export interface RouteState {
  isValid: boolean;
}

export interface HeaderProps {
  currentPage: string;
  className: string;
}
