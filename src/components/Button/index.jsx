import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder10: "rounded-[10px]" };
const variants = {
  Outline: "bg-gradient  border-[1px] border-solid text-black_900",
  GradientRedA201Red900: "bg-gradient1  text-white_A700",
  FillBlack900: "bg-black_900 text-white_A701",
};
const sizes = { sm: "p-[7px]", md: "p-[12px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf([
    "Outline",
    "GradientRedA201Red900",
    "FillBlack900",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};

Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "Outline",
  size: "sm",
};
export { Button };
