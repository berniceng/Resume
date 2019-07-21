import React, { Component } from 'react';

export interface InitialProps {
  history: any;
  token: string;
  setToken: Function;
}

export interface InitialState {
  token: string;
  history: any;
}

export interface MainProps {
  children: SubProps;
}

export interface SubProps {
  page: string;
  component: Component;
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

export interface CardProps {
  range: string;
  logo: string;
  title: string;
  subtitle: string;
}

export interface CardState {
  isOpen: boolean;
}
