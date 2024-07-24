import React, { ReactNode } from "react";
import cs from "classnames";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const classNames = cs(styles.container, className);
  return <div className={classNames}>{children}</div>;
};

export default Container;
