import clsx from "clsx";

type Variants = "base" | "small";

type SubHeadingProps = {
  children: React.ReactNode;
  variant?: Variants;
};

function getVariant(variant: Variants) {
  if (variant === "base") {
    return "text-[28px] font-bellefair text-secondary";
  } else if (variant === "small") {
    return "text-[14px] font-barlow-condensed tracking-[2.35px] text-neutral";
  }
}

export default function SubHeading({
  children,
  variant = "base",
}: SubHeadingProps) {
  const variantClass = getVariant(variant);

  return <p className={clsx("uppercase", variantClass)}>{children}</p>;
}
