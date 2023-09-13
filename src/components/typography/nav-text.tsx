import clsx from "clsx";
import { Link } from "react-router-dom";

type NavTextProps = {
  to: string;
  children: React.ReactNode;
  classNames: string;
};

export default function NavText({ children, to, classNames }: NavTextProps) {
  return (
    <Link
      to={to}
      className={clsx(
        "font-barlow-condensed text-base tracking-[2.7px] text-secondary uppercase",
        "",
        classNames
      )}
    >
      {children}
    </Link>
  );
}
