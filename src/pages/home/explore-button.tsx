import clsx from "clsx";
import { Link } from "react-router-dom";

// todo
// buat efek ketika dihover

export default function ExploreButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Link
      to={"/destination"}
      className={clsx(
        "relative z-10 flex items-center justify-center aspect-square bg-secondary rounded-full uppercase text-primary font-bellefair",
        "w-[150px] md:w-[242px] lg:w-[274px] text-xl md:text-[32px] tracking-[1.25px] md:tracking-[2px]"
      )}
    >
      {children}
    </Link>
  );
}
