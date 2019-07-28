import React, { Component } from 'react';

export interface InitialProps {
  history: any;
  match: any;
  token: string;
  setToken: Function;
}

export interface InitialState {
  token: string;
  history: any;
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
  collapsible: boolean;
}

export interface CardState {
  isOpen: boolean;
}

export interface TileProps {
  title: string;
  image: string;
  desc: string;
}
