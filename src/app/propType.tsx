import React from 'react';

export interface InitialProps {
  history: any;
  token: string;
  setToken: Function;
}

export interface InitialState {
  token: string;
}

export interface MainProps {
  children: SubProps;
}

export interface SubProps {
  page: string;
  component: React.Component;
}

export interface MainState {
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

export interface HeaderState {
  width: number;
  isOpen: boolean;
}
