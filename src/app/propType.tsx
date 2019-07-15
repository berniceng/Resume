import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface InitialProps {
  history: any;
  token: string;
  setToken: Function;
}

export interface InitialState {
  token: string;
}

export interface MainProps {
  children: React.Component;
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
