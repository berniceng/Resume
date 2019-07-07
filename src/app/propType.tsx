export interface InitialProps {
  token: string;
  setToken: Function;
}

export interface MainState {
  test1: number;
}

export interface LoginState {
  error: string;
}

export interface InputState {
  input: string;
}

export interface InputProps {
  label: string;
  type: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

export interface ButtonProps {
  label: string;
  func: Function;
}
