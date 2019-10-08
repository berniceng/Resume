import React, { Component } from 'react';

export interface InitialProps {
  history: any;
  match: any;
  token: string;
  setToken: Function;
  menuObj: MenuProps[];
}

export interface InitialState {
  history: any;
}

export interface ResizeWidthType {
  width: number;
}

export interface MainState {
  headerClass: string;
}

export interface RouteState {
  isValid: boolean;
}

export interface HeaderProps {
  currentPage: string;
  className: string;
}

export interface MenuProps {
  KEY: string;
  TITLE: string;
}

export interface IsOpenType {
  isOpen: boolean;
}

export interface CardProps {
  range: string;
  logo: string;
  title: string;
  subtitle: string;
  collapsible: boolean;
  desc: string[];
  tools: string[];
}

export interface CardType {
  type: string;
}

export interface TileProps {
  title: string;
  image: string;
  desc: string;
}

export interface SliderProps {
  data: RecommendationType[];
}

export interface RecommendationType {
  name: string;
  title: string;
  department: string;
  company: string;
  desc: string[];
}

export interface SliderState {
  index: number|undefined;
}
