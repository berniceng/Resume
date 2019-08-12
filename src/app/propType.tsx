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

export interface RouteState {
  isValid: boolean;
}

export interface HeaderProps {
  currentPage: string;
  className: string;
  onClick: any;
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
  desc: string[];
  tools: string[];
}

export interface CardType {
  type: string;
}

export interface CardState {
  isOpen: boolean;
}

export interface TileProps {
  title: string;
  image: string;
  desc: string;
}

export interface BookmarkProps {
  bookmarkId: string;
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
  index: number;
}
