import clsx from "clsx";
import { NavLink, NavLinkProps } from "react-router-dom";

type Sizes = "base" | "sm";

type NavTextProps = {
  to: string;
  children: React.ReactNode;
  classNames?: string;
  size?: Sizes;
} & NavLinkProps;

function getSizeVariant(size: Sizes) {
  if (size === "sm") {
    return "text-sm tracking-[2.36px]";
  }

  return "text-base tracking-[2.7px]";
}

export default function NavText({
  children,
  to,
  classNames,
  size = "base",
  ...props
}: NavTextProps) {
  const sizeVariant = getSizeVariant(size);
  return (
    <NavLink
      to={to}
      className={clsx(
        "font-barlow-condensed text-secondary uppercase",
        sizeVariant,
        classNames
      )}
      {...props}
    >
      {children}
    </NavLink>
  );
}
