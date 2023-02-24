import React from "react";

const variantClasses = {
  h1: "font-medium sm:text-[48px] md:text-[48px] text-[64px]",
  h2: "font-medium sm:text-[39.68px] md:text-[45.68px] text-[53.68px]",
  h3: "sm:text-[38px] md:text-[44px] text-[48px]",
  h4: "sm:text-[36px] md:text-[38px] text-[40px]",
  h5: "font-normal sm:text-[34px] md:text-[36px] text-[38px]",
  h6: "sm:text-[28px] md:text-[30px] text-[32px]",
  body1: "font-normal sm:text-[24px] md:text-[26px] text-[28px]",
  body2: "font-normal sm:text-[21.58px] md:text-[23.58px] text-[25.58px]",
  body3: "font-normal sm:text-[21px] md:text-[23px] text-[25px]",
  body4: "sm:text-[20px] md:text-[22px] text-[24px]",
  body5: "font-normal text-[20px]",
  body6: "font-normal text-[18px]",
  body7: "text-[16px]",
  body8: "font-normal text-[15px]",
  body9: "font-normal text-[14px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
