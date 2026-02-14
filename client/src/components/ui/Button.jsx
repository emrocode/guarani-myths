import { Button as HeadButton } from "@headlessui/react";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}) {
  const Component = href ? "a" : HeadButton;

  const classes = clsx(
    className,
    "bg-accent rounded-md px-4 py-3 md:px-5 text-xs md:text-sm font-medium whitespace-nowrap text-white uppercase no-underline shadow transition-opacity duration-150 ease-in hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60",
    {
      "bg-accent--secondary dark:text-primary": href && variant === "secondary",
      "bg-accent--secondary": !href && variant === "secondary",
    },
  );

  const componentProps = {
    className: classes,
    ...props,
  };

  if (href) {
    componentProps.href = href;
  }

  return <Component {...componentProps}>{children}</Component>;
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
