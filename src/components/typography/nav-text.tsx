import clsx from "clsx";
import { Link } from "react-router-dom";

type Sizes = "base" | "sm";

type NavTextProps = {
  to: string;
  children: React.ReactNode;
  classNames?: string;
  size?: Sizes;
};

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
}: NavTextProps) {
  const sizeVariant = getSizeVariant(size);
  return (
    <Link
      to={to}
      className={clsx(
        "font-barlow-condensed text-secondary uppercase",
        sizeVariant,
        classNames
      )}
    >
      {children}
    </Link>
  );
}
