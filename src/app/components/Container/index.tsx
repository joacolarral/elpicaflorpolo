import cs from "classnames";
import React, { ReactNode } from "react";

import styles from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  noPaddingRight?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  noPaddingRight,
}) => {
  const classNames = cs(
    styles.container,
    className,
    noPaddingRight && styles.spaceVerticalAndLeft
  );
  return <div className={classNames}>{children}</div>;
};

export default Container;
