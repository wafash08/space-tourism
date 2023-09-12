import { Link } from "react-router-dom";

type NavTextProps = {
  to: string;
  children: React.ReactNode;
};

export default function NavText({ children, to }: NavTextProps) {
  return (
    <Link
      to={to}
      className='font-barlow-condensed text-base tracking-[2.7px] text-secondary'
    >
      {children}
    </Link>
  );
}
