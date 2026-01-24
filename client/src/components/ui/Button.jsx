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
  if (href) {
    return (
      <a
        className={clsx(
          className,
          "bg-accent rounded-md px-5 py-2.5 text-sm font-medium whitespace-nowrap text-white no-underline transition-opacity duration-150 ease-in hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60",
          {
            "bg-accent--secondary dark:text-primary": variant === "secondary",
          },
        )}
        href={href}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <HeadButton
      className={clsx(
        className,
        "bg-accent rounded-md px-5 py-2.5 text-sm font-medium whitespace-nowrap text-white no-underline transition-opacity duration-150 ease-in hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60",
        {
          "bg-accent--secondary": variant === "secondary",
        },
      )}
      {...props}
    >
      {children}
    </HeadButton>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
