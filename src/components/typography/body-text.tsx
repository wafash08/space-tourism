import clsx from "clsx";

type Colors = "white" | "gray";

export default function BodyText({
  children,
  classNames,
  color = "white",
}: {
  children: React.ReactNode;
  classNames?: string;
  color?: Colors;
}) {
  return (
    <p
      className={clsx(
        "font-barlow text-[15px] md:text-base lg:text-lg leading-normal",
        color === "white" ? "text-secondary" : undefined,
        color === "gray" ? "text-[#D0D6F9]" : undefined,
        classNames
      )}
    >
      {children}
    </p>
  );
}
