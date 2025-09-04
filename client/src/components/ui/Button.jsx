import { Link } from "react-router";
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
      <Link
        className={clsx(
          className,
          "ring-line ring-offset-primary bg-accent rounded-xs px-4 py-2 text-sm font-medium whitespace-nowrap text-white no-underline ring ring-offset-[1.5px] transition-opacity duration-150 ease-in hover:opacity-80 disabled:opacity-60",
          {
            "bg-accent--secondary dark:text-primary": variant === "secondary",
          },
        )}
        to={href}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <HeadButton
      className={clsx(
        className,
        "ring-line ring-offset-primary bg-accent rounded-xs px-4 py-2 text-sm font-medium whitespace-nowrap text-white no-underline ring ring-offset-[1.5px] transition-opacity duration-150 ease-in hover:opacity-80 disabled:opacity-60",
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
