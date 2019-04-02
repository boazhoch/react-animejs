import React, { FunctionComponent } from "react";

interface IProps {
  name?: string;
  onClick?: () => void;
}

const Btn: FunctionComponent<IProps> = props => (
  <button onClick={() => props.onClick && props.onClick()}>
    {props.name || props.children}
  </button>
);

export default Btn;
