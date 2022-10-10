import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CustomBorderTL8:
    "rounded-bl-[8px] rounded-br-[0] rounded-tl-[8px] rounded-tr-[0]",
  CustomBorderLR25:
    "rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[25px]",
  CustomBorderLR50:
    "rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[50px]",
};
const variants = {
  FillDeeporange500: "bg-deep_orange_500 text-white_A700",
  FillBlue900: "bg-blue_900 text-white_A700",
};
const sizes = {
  sm: "lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px]",
  md: "lg:p-[17px] xl:p-[19px] p-[22px] 3xl:p-[26px]",
};

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
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
  shape: PropTypes.oneOf([
    "CustomBorderTL8",
    "CustomBorderLR25",
    "CustomBorderLR50",
  ]),
  variant: PropTypes.oneOf(["FillDeeporange500", "FillBlue900"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "CustomBorderTL8",
  variant: "FillDeeporange500",
  size: "sm",
};

export { Button };
